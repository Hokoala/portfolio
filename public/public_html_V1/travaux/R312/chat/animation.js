function createConfetti() {
  const container = document.getElementById('animation-container');
  container.innerHTML = ''; // Réinitialise les confettis existants

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw'; // Position aléatoire sur l'axe horizontal
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Couleurs aléatoires
    confetti.style.animationDelay = `${Math.random()}s`; // Délais aléatoires pour plus de variété
    container.appendChild(confetti);

    // Supprimer les confettis après 3 secondes
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}