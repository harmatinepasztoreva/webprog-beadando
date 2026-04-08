<?php
// Az SQLite adatbázis fájlod pontos neve (legyen egy mappában a PHP fájllal!)
$db_file = "cukraszda.db"; 

try {
    // SQLite esetén nem kell host, user és pass!
    $pdo = new PDO("sqlite:" . $db_file, null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    // Fejlesztéskor írassuk ki a hibát, hogy lássuk, ha nem találja a fájlt
    die("Database connection failed: " . $e->getMessage());
}
// Itt NINCS felesleges zárójel a végén!
