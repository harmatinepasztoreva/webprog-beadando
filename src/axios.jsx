import React, { useState, useEffect } from "react";
import axios from "axios";
import "./React.css"; // Ez a közös stílusfájl az src mappában

function SutiApp() {
    const [sutik, setSutik] = useState([]);
    const [urlap, setUrlap] = useState({ id: '', nev: '', tipus: '', dijazott: '' });
    const [szerkesztesMod, setSzerkesztesMod] = useState(false);
    const [uzenet, setUzenet] = useState("");

    const API_URL = "read.php";

    const adatokBetoltese = async () => {
        try {
            const response = await axios.get(API_URL);
            setSutik(response.data.readData); 
        } catch (error) {
            console.error("Hiba az adatok lekérésekor:", error);
        }
    };

    useEffect(() => {
        adatokBetoltese();
    }, []);

    const handleMentes = async (e) => {
        e.preventDefault();
        try {
            const adatKuldve = {
                ...urlap,
                // A PHP -1-et vár az igenre a fetchapi_js.js alapján, 0-t a nemre
                dijazott: urlap.dijazott === "igen" || urlap.dijazott === -1 ? -1 : 0 
            };
            
            let res;
            if (szerkesztesMod) {
                res = await axios.put(API_URL, adatKuldve);
            } else {
                res = await axios.post(API_URL, adatKuldve);
            }
            //setUzenet(res.data.status);
            alert(res.data.status);
            urlapAlaphelyzetbe();
            adatokBetoltese();
        } catch (error) {
            console.error("Hiba a mentés során:", error);
            setUzenet("Hiba történt!");
        }
    };

    const handleTorles = async (id) => {
        if (window.confirm("Biztosan törölni szeretnéd ezt a süteményt?")) {
            try {
                const res = await axios.delete(API_URL, { data: { id: id } });
                //setUzenet(res.data.status);
                alert(res.data.status);
                adatokBetoltese();
            } catch (error) {
                console.error("Hiba a törlés során:", error);
            }
        }
    };

    const urlapAlaphelyzetbe = () => {
        setUrlap({ id: '', nev: '', tipus: '', dijazott: 0 });
        setSzerkesztesMod(false);
    };

    const szerkesztesBetoltese = (suti) => {
        setUzenet("");
        setUrlap({
            id: suti.id,
            nev: suti.nev,
            tipus: suti.tipus,
            dijazott: suti.dijazott == 0 ? "nem" : "igen"
        });
        setSzerkesztesMod(true);
    };

    return (
        <div className="react-wrapper">
            <div className="suti-form">
                <h3 id="addedit">{szerkesztesMod ? "Sütemény módosítása" : "Új sütemény hozzáadása"}</h3>
                <p>{uzenet}</p>

                <form onSubmit={handleMentes}>
                    <div>
                        <label>Név*</label>
                        <input 
                            type="text" 
                            placeholder="Név" 
                            value={urlap.nev} 
                            onChange={(e) => setUrlap({...urlap, nev: e.target.value})} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Sütemény típusa</label>
                        <select 
                            value={urlap.tipus} 
                            onChange={(e) => setUrlap({...urlap, tipus: e.target.value})}
                            required
                        >
                            <option value="">-- Válassz típust --</option>
                            <option value="vegyes">vegyes</option>
                            <option value="sós teasütemény">sós teasütemény</option>
                            <option value="bejgli">bejgli</option>
                            <option value="torta">torta</option>
                            <option value="tortaszelet">tortaszelet</option>
                            <option value="pite">pite</option>
                            <option value="tejszínes sütemény">tejszínes sütemény</option>
                            <option value="édes teasütemény">édes teasütemény</option>
                            <option value="különleges torta">különleges torta</option>
                            <option value="krémes">krémes</option>
                        </select>
                    </div>
                    <div>
                        <label>Díjazott</label>
                            <select 
                                value={urlap.dijazott === -1 || urlap.dijazott === "igen" ? "igen" : (urlap.dijazott === 0 || urlap.dijazott === "nem" ? "nem" : "")} 
                                onChange={(e) => setUrlap({...urlap, dijazott: e.target.value})}
                                required
                            >
                                <option value="">-- Válassz --</option>
                                <option value="nem">nem</option>
                                <option value="igen">igen</option>
                            </select>
                    </div>
                    <div className="form-action-buttons">
                        <button type="submit">Mentés</button>
                        {szerkesztesMod && (
                            <button type="button" onClick={urlapAlaphelyzetbe}>Mégse</button>
                        )}
                    </div>
                </form>
            </div>

            <div className="suti-table">
                <table className="list">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Sütemény neve</th>
                            <th>Sütemény típusa</th>
                            <th>Díjazott</th>
                            <th>Műveletek</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sutik.map((suti) => (
                            <tr key={suti.id}>
                                <td>{suti.id}</td>
                                <td>{suti.nev}</td>
                                <td>{suti.tipus}</td>
                                <td>{suti.dijazott == 0 ? "nem" : "igen"}</td>
                                <td>
                                    <button onClick={() => szerkesztesBetoltese(suti)}>Módosítás</button>
                                    <button onClick={() => handleTorles(suti.id)}>Törlés</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SutiApp;