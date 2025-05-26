<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'chat';
$user = 'mmi23e10'; // Utilisateur MariaDB
$pass = 'Michel0781@$'; // Mot de passe de l'utilisateur



try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
// Récupérer les données passées dans l'URL
$pseudo = $_GET['pseudo'] ?? null;
$message = $_GET['message'] ?? null;

// Exemple : ID de l'utilisateur connecté (utilisez un système de sessions pour récupérer cet ID)
$user_id = 1; // Supposons que "Moi" ait l'ID 1

if ($pseudo && $message) {
    $stmt = $pdo->prepare("INSERT INTO chat (pseudo, message, user_id) VALUES (?, ?, ?)");
    $stmt->execute([$pseudo, $message, $user_id]);
}
?>