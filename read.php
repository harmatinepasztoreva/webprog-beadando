<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Beemeljük a javított kapcsolatot
require_once 'db.php'; 

try {
    // Cseréld ki a 'suti' nevet arra a táblára, ami a te cukrászda adatbázisodban van!
    // (Például: termekek, sutemenyek, vagy uzenetek)
    $stmt = $pdo->query("SELECT * FROM suti LIMIT 10"); 
    $adatok = $stmt->fetchAll();

    header("Content-Type: application/json"); // Így a JavaScript fetch látni fogja
    echo json_encode($adatok);

} catch (PDOException $e) {
    echo json_encode(["error" => "Lekérdezési hiba: " . $e->getMessage()]);
}
?>