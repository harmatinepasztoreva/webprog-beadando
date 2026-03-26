import React, { useState } from "react";
import AddSutiForm from "./forms/AddSutiForm";

const App = () => {
  const kezdoSutik = [
    { id: 1, nev: "Süni", tipus: "vegyes", ar: 500 },
    { id: 2, nev: "Dobos", tipus: "torta", ar: 9000 },
    { id: 3, nev: "Krémes", tipus: "krémes", ar: 250 },
  ];

  const [sutik, setSutik] = useState(kezdoSutik);

  const addSuti = (suti) => {
    const ujSuti = {
      id: sutik.length + 1,
      nev: suti.nev,
      tipus: suti.tipus,
      ar: suti.ar,
    };

    setSutik([...sutik, ujSuti]);
  };

  return (
    <div>
      <h1>React CRUD - Cukrászda</h1>

      <AddSutiForm addSuti={addSuti} />

      <h2>Sütik listája</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Azonosító</th>
            <th>Név</th>
            <th>Típus</th>
            <th>Ár</th>
          </tr>
        </thead>
        <tbody>
          {sutik.map((suti) => (
            <tr key={suti.id}>
              <td>{suti.id}</td>
              <td>{suti.nev}</td>
              <td>{suti.tipus}</td>
              <td>{suti.ar} Ft</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;