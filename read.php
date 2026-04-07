<?php
// Hibakeresés bekapcsolása (hogy lásd, ha baj van)
ini_set('display_errors', 1);
error_reporting(E_ALL);

$db_file = 'adatbazisod_neve.db'; // <--- ÍRD ÁT A SAJÁT FÁJLNEVEDRE!

try {
    $pdo = new PDO("sqlite:" . $db_file, null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    // Próbáljunk meg lekérni adatokat (Cseréld le a 'users'-t a te táblád nevére!)
    $stmt = $pdo->query("SELECT * FROM users LIMIT 5");
    $adatok = $stmt->fetchAll();

    echo "<h1>Siker! A kapcsolat él.</h1>";
    echo "<pre>";
    print_r($adatok); // Kiírja az adatokat olvasható formában
    echo "</pre>";

} catch (PDOException $e) {
    echo "<h1>Hiba történt!</h1>";
    echo "Üzenet: " . $e->getMessage();
}
?>