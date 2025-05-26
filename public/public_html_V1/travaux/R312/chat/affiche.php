<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'chat';
$user = 'mmi23e10';
$pass = 'Michel0781@$';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Récupérer l'historique des messages
try {
    $stmt = $pdo->query("SELECT pseudo, message, user_id, created_at FROM chat ORDER BY created_at ASC");
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($messages as $message) {
        $class = ($message['user_id'] == 1) ? 'me' : 'other';
        echo '<div class="chat-bubble ' . $class . '">';
        echo '<div class="pseudo">' . htmlspecialchars($message['pseudo']) . '</div>';
        echo '<div class="message">' . htmlspecialchars($message['message']) . '</div>';
        echo '</div>';
    }
} catch (PDOException $e) {
    echo "Erreur lors de la récupération des messages : " . $e->getMessage();
}
?>