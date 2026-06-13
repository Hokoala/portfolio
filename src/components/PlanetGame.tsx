import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Html } from '@react-three/drei'
import { useRef, useEffect, useState, useMemo } from 'react'
import * as THREE from 'three'

const PLANET_RADIUS = 3.5
const CHAR_Y = PLANET_RADIUS + 0.6
const ROTATION_SPEED = 0.014
const ACTIVE_DIST = 1.3

const PROJECTS = [
    { slug: 'medisimple',     title: 'MediSimple',     color: '#10b981', phi: 0.55, theta: 0.5  },
    { slug: 'draft-ai',       title: 'Draft AI',        color: '#8b5cf6', phi: 1.10, theta: 2.0  },
    { slug: 'ransau-systeme', title: 'Ransau Systeme',  color: '#f59e0b', phi: 0.90, theta: 3.8  },
    { slug: 'devflow',        title: 'DevFlow CLI',     color: '#38bdf8', phi: 1.40, theta: 1.2  },
    { slug: 'docly',          title: 'Docly',           color: '#ec4899', phi: 0.50, theta: 5.0  },
    { slug: 'api-spotify',    title: 'API Spotify',     color: '#1db954', phi: 1.70, theta: 4.0  },
    { slug: 'jeu-unity-3d',   title: 'Unity 3D',        color: '#f97316', phi: 1.20, theta: 0.05 },
]

const LAND = [
    { phi: 0.60, theta: 0.80, s: 0.45 },
    { phi: 1.20, theta: 2.10, s: 0.55 },
    { phi: 0.80, theta: 4.50, s: 0.40 },
    { phi: 1.50, theta: 1.00, s: 0.50 },
    { phi: 2.00, theta: 3.50, s: 0.48 },
    { phi: 0.40, theta: 3.00, s: 0.35 },
    { phi: 1.80, theta: 5.20, s: 0.42 },
    { phi: 2.50, theta: 0.60, s: 0.38 },
]

const FLAGS = [
    { phi: 0.30, theta: 1.50 },
    { phi: 1.05, theta: 3.10 },
    { phi: 2.00, theta: 2.00 },
]

function toCart(r: number, phi: number, theta: number): [number, number, number] {
    return [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
    ]
}

function FrenchFlag({ phi, theta }: { phi: number; theta: number }) {
    const pos = toCart(PLANET_RADIUS + 0.05, phi, theta)
    const normal = new THREE.Vector3(...pos).normalize()
    const up = new THREE.Vector3(0, 1, 0)
    const quat = new THREE.Quaternion().setFromUnitVectors(up, normal)

    return (
        <group position={pos} quaternion={quat}>
            {/* Pole */}
            <mesh position={[0, 0.25, 0]}>
                <cylinderGeometry args={[0.018, 0.018, 0.5, 6]} />
                <meshStandardMaterial color="#aaaaaa" />
            </mesh>
            {/* Blue stripe */}
            <mesh position={[-0.085, 0.53, 0.01]}>
                <boxGeometry args={[0.115, 0.17, 0.005]} />
                <meshStandardMaterial color="#002395" />
            </mesh>
            {/* White stripe */}
            <mesh position={[0, 0.53, 0.01]}>
                <boxGeometry args={[0.115, 0.17, 0.005]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            {/* Red stripe */}
            <mesh position={[0.085, 0.53, 0.01]}>
                <boxGeometry args={[0.115, 0.17, 0.005]} />
                <meshStandardMaterial color="#ED2939" />
            </mesh>
        </group>
    )
}

function Character() {
    const groupRef = useRef<THREE.Group>(null)

    useFrame(({ clock }) => {
        if (!groupRef.current) return
        groupRef.current.position.y = CHAR_Y + Math.sin(clock.getElapsedTime() * 2.5) * 0.025
    })

    return (
        <group ref={groupRef} position={[0, CHAR_Y, 0]}>
            {/* Head */}
            <mesh position={[0, 0.30, 0]}>
                <sphereGeometry args={[0.13, 16, 16]} />
                <meshStandardMaterial color="#f5c8a0" />
            </mesh>
            {/* Hair */}
            <mesh position={[0, 0.40, 0]}>
                <sphereGeometry args={[0.10, 16, 16]} />
                <meshStandardMaterial color="#2d1a0e" />
            </mesh>
            {/* Body — France jersey blue */}
            <mesh position={[0, 0.08, 0]}>
                <boxGeometry args={[0.22, 0.30, 0.13]} />
                <meshStandardMaterial color="#002395" />
            </mesh>
            {/* Left arm */}
            <mesh position={[-0.16, 0.08, 0]}>
                <boxGeometry args={[0.07, 0.24, 0.10]} />
                <meshStandardMaterial color="#002395" />
            </mesh>
            {/* Right arm */}
            <mesh position={[0.16, 0.08, 0]}>
                <boxGeometry args={[0.07, 0.24, 0.10]} />
                <meshStandardMaterial color="#002395" />
            </mesh>
            {/* Left leg */}
            <mesh position={[-0.065, -0.175, 0]}>
                <boxGeometry args={[0.09, 0.20, 0.11]} />
                <meshStandardMaterial color="#1a1a2e" />
            </mesh>
            {/* Right leg */}
            <mesh position={[0.065, -0.175, 0]}>
                <boxGeometry args={[0.09, 0.20, 0.11]} />
                <meshStandardMaterial color="#1a1a2e" />
            </mesh>
            {/* Left shoe */}
            <mesh position={[-0.065, -0.295, 0.02]}>
                <boxGeometry args={[0.10, 0.07, 0.15]} />
                <meshStandardMaterial color="#111111" />
            </mesh>
            {/* Right shoe */}
            <mesh position={[0.065, -0.295, 0.02]}>
                <boxGeometry args={[0.10, 0.07, 0.15]} />
                <meshStandardMaterial color="#111111" />
            </mesh>
        </group>
    )
}

function ProjectPin({
    phi, theta, title, color, slug,
}: {
    phi: number; theta: number; title: string; color: string; slug: string
}) {
    const pinRef = useRef<THREE.Mesh>(null)
    const stemRef = useRef<THREE.Mesh>(null)
    const [active, setActive] = useState(false)
    const worldPos = useRef(new THREE.Vector3())
    const charPos = useMemo(() => new THREE.Vector3(0, CHAR_Y, 0), [])

    useFrame(() => {
        if (!pinRef.current) return
        pinRef.current.getWorldPosition(worldPos.current)
        const isNear = worldPos.current.distanceTo(charPos) < ACTIVE_DIST

        if (isNear !== active) setActive(isNear)

        const mat = pinRef.current.material as THREE.MeshStandardMaterial
        mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, isNear ? 1.2 : 0.25, 0.12)

        if (stemRef.current) {
            const sm = stemRef.current.material as THREE.MeshStandardMaterial
            sm.emissiveIntensity = THREE.MathUtils.lerp(sm.emissiveIntensity, isNear ? 0.6 : 0.1, 0.12)
        }
    })

    const pos = toCart(PLANET_RADIUS + 0.05, phi, theta)
    const normal = new THREE.Vector3(...pos).normalize()
    const up = new THREE.Vector3(0, 1, 0)
    const quat = new THREE.Quaternion().setFromUnitVectors(up, normal)

    return (
        <group position={pos} quaternion={quat}>
            {/* Stem */}
            <mesh ref={stemRef} position={[0, 0.18, 0]}>
                <cylinderGeometry args={[0.035, 0.035, 0.36, 8]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.1} />
            </mesh>
            {/* Ball */}
            <mesh ref={pinRef} position={[0, 0.40, 0]}>
                <sphereGeometry args={[0.11, 16, 16]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.25} />
            </mesh>
            {/* Label — only when active */}
            {active && (
                <Html position={[0, 0.75, 0]} center distanceFactor={6}>
                    <a
                        href={`/projects/${slug}`}
                        style={{
                            display: 'block',
                            padding: '4px 12px',
                            background: 'rgba(10,10,20,0.92)',
                            border: `1px solid ${color}`,
                            borderRadius: '999px',
                            color: '#fff',
                            fontSize: '11px',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            boxShadow: `0 0 8px ${color}66`,
                        }}
                    >
                        {title} →
                    </a>
                </Html>
            )}
        </group>
    )
}

function Scene() {
    const planetRef = useRef<THREE.Group>(null)
    const keysRef = useRef(new Set<string>())

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            keysRef.current.add(e.key.toLowerCase())
            if (['z', 's', 'q', 'd'].includes(e.key.toLowerCase())) e.preventDefault()
        }
        const up = (e: KeyboardEvent) => keysRef.current.delete(e.key.toLowerCase())
        window.addEventListener('keydown', down)
        window.addEventListener('keyup', up)
        return () => {
            window.removeEventListener('keydown', down)
            window.removeEventListener('keyup', up)
        }
    }, [])

    useFrame(() => {
        if (!planetRef.current) return
        const k = keysRef.current
        if (k.has('z')) planetRef.current.rotation.x += ROTATION_SPEED
        if (k.has('s')) planetRef.current.rotation.x -= ROTATION_SPEED
        if (k.has('q')) planetRef.current.rotation.y += ROTATION_SPEED
        if (k.has('d')) planetRef.current.rotation.y -= ROTATION_SPEED
    })

    return (
        <>
            <Character />

            <group ref={planetRef}>
                {/* Main sphere */}
                <mesh>
                    <sphereGeometry args={[PLANET_RADIUS, 64, 64]} />
                    <meshStandardMaterial color="#0f2557" roughness={0.75} metalness={0.15} />
                </mesh>

                {/* Atmosphere glow ring */}
                <mesh>
                    <sphereGeometry args={[PLANET_RADIUS + 0.08, 64, 64]} />
                    <meshStandardMaterial
                        color="#1a4aff"
                        transparent
                        opacity={0.06}
                        side={THREE.BackSide}
                    />
                </mesh>

                {/* Land patches */}
                {LAND.map((l, i) => (
                    <mesh key={i} position={toCart(PLANET_RADIUS + 0.02, l.phi, l.theta)}>
                        <sphereGeometry args={[l.s, 12, 12]} />
                        <meshStandardMaterial color="#2d5a27" roughness={1} />
                    </mesh>
                ))}

                {/* French flags */}
                {FLAGS.map((f, i) => (
                    <FrenchFlag key={i} phi={f.phi} theta={f.theta} />
                ))}

                {/* Project pins */}
                {PROJECTS.map((p) => (
                    <ProjectPin key={p.slug} {...p} />
                ))}
            </group>
        </>
    )
}

export default function PlanetGame() {
    return (
        <Canvas
            camera={{ position: [0, 2.5, 9.5], fov: 48 }}
            gl={{ antialias: true }}
            style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0 }}
        >
            <color attach="background" args={['#03030f']} />
            <Stars radius={120} depth={60} count={6000} factor={4} saturation={0} fade speed={0.6} />

            <ambientLight intensity={0.4} />
            <directionalLight position={[6, 6, 4]} intensity={1.8} castShadow />
            <pointLight position={[-6, 4, -4]} intensity={0.6} color="#3b5cc4" />
            <pointLight position={[0, -6, 0]} intensity={0.3} color="#102070" />

            <Scene />
        </Canvas>
    )
}
