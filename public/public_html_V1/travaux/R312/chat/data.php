<?php
// Connexion à la base de données
$host = 'localhost';
$dbname = 'chat';
$user = 'mmi23e10'; // Utilisateur MariaDB
$pass = 'Michel0781@$'; // Mot de passe de l'utilisateur

header('Content-Type: application/json'); // Spécifie que la réponse sera en JSON

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
try {
    // Récupérer les messages depuis la table
    $stmt = $pdo->query("SELECT id, pseudo, message, created_at FROM chat ORDER BY created_at ASC");

    // Stocker les messages dans un tableau
    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retourner les messages sous forme de JSON
    echo json_encode(["success" => true, "messages" => $messages], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    // Retourner une erreur si la requête échoue
    echo json_encode(["error" => "Erreur lors de la récupération des messages : " . $e->getMessage()]);
}
?>