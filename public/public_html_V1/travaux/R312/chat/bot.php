<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'chat';
$user = 'mmi23e10'; // Utilisateur MariaDB
$pass = 'Michel0781@$'; // Mot de passe de l'utilisateur

header('Content-Type: application/json'); // Réponse en JSON

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['error' => "Erreur de connexion : " . $e->getMessage()]);
    exit;
}

// Liste des réponses du bot
$responses = [
    'salut' => 'Salut ! Comment ça va ?',
    'ça va' => 'Super ! Et toi ?',
    'bonjour' => 'Bonjour ! Que puis-je faire pour toi ?',
    'merci' => 'Avec plaisir !',
    'au revoir' => 'Au revoir ! À bientôt !',
    'anniversaire' => 'Joyeux anniversaire ! 🎉',
    'blague' => 'Pourquoi les plongeurs plongent-ils en arrière ? Pour éviter le bateau ! 😄',
    'heure' => 'Il est actuellement ' . date('H:i'),
    'date' => 'Nous sommes le ' . date('d/m/Y'),
    'aide' => 'Je suis là pour t\'aider. Pose-moi une question !',
    'chat' => 'Oui, nous discutons actuellement dans un chat !',
    'robot' => 'Je suis un robot, mais je peux discuter comme un humain !',
    'amour' => 'L\'amour, c\'est magnifique. Qu\'en penses-tu ?',
    'voyage' => 'Les voyages ouvrent l\'esprit ! As-tu une destination préférée ?',
    'musique' => 'J\'aime toutes sortes de musiques. Et toi ?',
    'film' => 'Quel est ton film préféré ?',
    'jeux' => 'J\'adore les jeux ! As-tu un jeu favori ?',
    'livre' => 'Lire, c\'est voyager sans bouger. Quel est ton dernier livre lu ?',
    'sport' => 'Le sport est bon pour la santé ! Quel sport pratiques-tu ?',
    'default' => 'Désolé, je ne comprends pas. Peux-tu reformuler ?'
];
// Récupérer le message de l'utilisateur
if (!isset($_GET['message']) || empty(trim($_GET['message']))) {
    echo json_encode(['error' => 'Message vide ou invalide.']);
    exit;
}

$user_message = htmlspecialchars(strtolower(trim($_GET['message'])), ENT_QUOTES, 'UTF-8');

// Chercher une réponse du bot
$bot_response = $responses['default'];
foreach ($responses as $key => $response) {
    if (strpos($user_message, $key) !== false) {
        $bot_response = $response;
        break;
    }
}

try {
    // Enregistrer le message de l'utilisateur dans la base
    $stmt = $pdo->prepare("INSERT INTO chat (pseudo, message, user_id) VALUES (?, ?, ?)");
    $stmt->execute(['Moi', $user_message, 1]); // `1` = ID de l'utilisateur

    // Enregistrer la réponse du bot dans la base
    $stmt = $pdo->prepare("INSERT INTO chat (pseudo, message, user_id) VALUES (?, ?, ?)");
    $stmt->execute(['John', $bot_response, 0]); // `0` = ID pour le bot
} catch (PDOException $e) {
    echo json_encode(['error' => "Erreur lors de l'enregistrement en base : " . $e->getMessage()]);
    exit;
}

// Retourner la réponse du bot
echo json_encode(['response' => $bot_response]);
?>