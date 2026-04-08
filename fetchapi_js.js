const api = "read.php"; 

document.getElementById("userForm").addEventListener("submit", saveUser); 

window.onload = function() { 
    fetchUsers(); 
}; 

function fetchUsers() { 
    fetch(api) 
    .then(res => res.json()) 
    .then(data => { 
        document.getElementById("message").innerText = data.status; 
        let rows = ""; 
        data.readData.forEach(user => { 
            //igen nemmé alakítás
            let dijazottSzoveg = (user.dijazott == 0) ? "nem" : "igen";
            rows += ` 
            <tr> 
                <td>${user.id}</td> 
                <td>${user.nev}</td> 
                <td>${user.tipus}</td>
                <td>${dijazottSzoveg}</td>
                <td> 
                    <button onclick='editSuti(${JSON.stringify(user)})'>Módosítás</button> 
                    <button onclick='deleteSuti(${user.id})'>Törlés</button> 
                </td> 
            </tr>`; 
        }); 
        document.getElementById("userTable").innerHTML = rows; 
    }); 
} 

function saveUser(e) { 
    e.preventDefault(); 
    const id = document.getElementById("id").value; 
    const nev = document.getElementById("nev").value; 
    // JAVÍTVA: Az ID 'sutitipus' a HTML-ben!
    const sutitipus = document.getElementById("sutitipus").value; 
    const dijazottValue = document.getElementById("dijazott").value;

    const dijazott = (dijazottValue === "igen") ? -1 : 0;

    // A PHP 'tipus' néven várja az adatot
    const data = { id, nev, tipus: sutitipus, dijazott };

    const $method = id ? "PUT" : "POST"; 

    fetch(api, { 
        method: $method, 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify(data) 
    }) 
    .then(res => res.json()) 
    .then(data => { 
        e.target.reset(); 
        document.getElementById("message").innerText = data.status; 
        document.getElementById("id").value = ""; 
        document.getElementById("addedit").innerHTML = "Új sütemény hozzáadása";
        fetchUsers(); 
    }); 
} 

function editSuti(user) { 
    document.getElementById("message").innerText = ""; 
    document.getElementById("addedit").innerHTML = "Sütemény módosítása"; 
    
    // Adatok betöltése az űrlapba
    document.getElementById("id").value = user.id; 
    document.getElementById("nev").value = user.nev; 
    
    // JAVÍTVA: A HTML-ben az ID 'sutitipus'
    document.getElementById("sutitipus").value = user.tipus;
    
    // Díjazott beállítása
    document.getElementById("dijazott").value = (user.dijazott == 0) ? "nem" : "igen"; 
} 

function deleteSuti(id) { 
    if (!confirm("Biztosan törölni szeretnéd ezt a süteményt?")) return; 
    fetch(api, { 
        method: "DELETE", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({id}) 
    }) 
    .then(res => res.json()) 
    .then(data => { 
        document.getElementById("message").innerText = data.status; 
        fetchUsers(); 
    });
}