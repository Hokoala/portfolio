$(document).ready(function () {
    const messageList = $('#message-list'); // Référence au conteneur des messages
  
    // Charger l'historique des messages
    function loadMessages() {
      $.get('affiche.php', function (data) {
        messageList.html(data); // Charger les messages depuis affiche.php
        scrollToBottom();
      }).fail(function () {
        console.error("Erreur lors du chargement des messages !");
      });
    }
  
    // Fonction pour scroller en bas
    function scrollToBottom() {
      messageList.scrollTop(messageList[0].scrollHeight);
    }
  
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
  
    // Fonction pour ajouter un message dans le chat
    function appendMessage(pseudo, message, isUser = false) {
      const bubbleClass = isUser ? 'me' : 'other';
      messageList.append(`
        <div class="chat-bubble ${bubbleClass}">
          <div class="pseudo">${pseudo}</div>
          <div class="message">${message}</div>
        </div>
      `);
      scrollToBottom();
    }
  
    // Gestion de l'envoi du message
    $('#send-button').click(function () {
      const userMessage = $('#message-input').val().trim();
  
      // Vérification du contenu du message
      if (userMessage === '') {
        alert("Veuillez entrer un message avant d'envoyer !");
        return;
      }
  
      // Ajouter le message de l'utilisateur dans le chat
      appendMessage('Moi', userMessage, true);
  
      // Déclencher l'animation si le message utilisateur contient "anniversaire"
      if (userMessage.toLowerCase().includes('anniversaire')) {
        createConfetti();
      }
  
      // Envoyer le message au bot
      $.get('bot.php', { message: userMessage }, function (data) {
        try {
          const botResponse = JSON.parse(data).response;
  
          // Ajouter la réponse du bot
          appendMessage('John', botResponse);
  
          // Déclencher l'animation si la réponse du bot contient "Joyeux anniversaire"
          if (botResponse.toLowerCase().includes('joyeux anniversaire')) {
            createConfetti();
          }
        } catch (error) {
          console.error("Erreur JSON :", error);
          appendMessage('John', "Une erreur est survenue. Veuillez réessayer.");
        }
      }).fail(function () {
        console.error("Erreur lors de la communication avec le bot !");
        appendMessage('John', "Le bot est indisponible pour le moment.");
      });
  
      // Vider le champ de saisie
      $('#message-input').val('');
    });
  
    // Envoi du message avec la touche Entrée
    $('#message-input').keydown(function (event) {
      if (event.key === 'Enter') {
        $('#send-button').click();
      }
    });
  
    // Charger les messages au démarrage
    loadMessages();
  
    // Rafraîchir les messages toutes les 5 secondes
    setInterval(loadMessages, 4000);
  });