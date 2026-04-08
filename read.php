<?php 
header("Content-Type: application/json"); 
require "db.php"; 
// $_SERVER tömbből kiolvassuk a küldési módszert: GET, POST, PUT, DELETE 

$method = $_SERVER['REQUEST_METHOD']; 
switch ($method) { 
case 'GET':   
try { 
// Lekérdezzük a users tábla adatait az adatbázisból és visszaadjuk a hívó félnek: 
$stmt = $pdo->query("SELECT * FROM suti"); 
$readData=$stmt->fetchAll(); 
// JSON objektumban továbbítjuk az adatokat, csak akkor ír hibaüzenetet, ha nem sikerül a beolvasás. 
echo json_encode(['status' => '', "readData"=>$readData]); 
} 
catch(PDOException $e) { 
echo json_encode(['status' => 'Read error!']); 
} 
break; 
case 'POST': 
try { 
// A JSON-ban küldött adatokat átalakítjuk tömbbé: 

            $data = json_decode(file_get_contents("php://input"), true); 
// Új rekordot adunk a táblához a megadott name és email adatokkal: 
//  Preperált lekérdezés: gyakorlaton tanultak róla.  
// Az ID automatikusan kap értéket (AUTO_INCREMENT) 
            $stmt = $pdo->prepare("INSERT INTO suti (nev, tipus, dijazott) VALUES (?, ?, ?)"); 
            $stmt->execute([$data['nev'], $data['tipus'], $data['dijazott']]);
            echo json_encode(['status' => 'Create success!']); 
        } 
        catch(PDOException $e) { 
          echo json_encode(['status' => 'Create error!']); 
        } 
        break; 
    case 'PUT': 
        try { 
            $data = json_decode(file_get_contents("php://input"), true); 
// Módosítjuk az adott ID-jű rekord adatait: 
            $stmt = $pdo->prepare("UPDATE suti SET nev=?, tipus=?, dijazott=? WHERE id=?"); 
            $stmt->execute([$data['nev'], $data['tipus'], $data['dijazott'], $data['id']]);
            echo json_encode(['status' => 'Update success!']); 
        } 
        catch(PDOException $e) { 
          echo json_encode(['status' => 'Update error!']); 
        } 
        break; 
    case 'DELETE': 
        try { 
            $data = json_decode(file_get_contents("php://input"), true); 
// Töröljük az adott ID-jű rekordot: 
            $stmt = $pdo->prepare("DELETE FROM suti WHERE id=?"); 
            $stmt->execute([$data['id']]); 
            echo json_encode(['status' => 'Delete success!']); 
        } 
        catch(PDOException $e) { 
          echo json_encode(['status' => 'Delete error!']); 
        } 
        break; 
}
?>