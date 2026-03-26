import { useState } from "react";
import "./App.css";
import AddSutiForm from "./forms/AddSutiForm";

const App = () => {
  const [sutik, setSutik] = useState([]);
  const [editingSuti, setEditingSuti] = useState(null);

  const addSuti = (suti) => {
    setSutik([...sutik, { ...suti, id: Date.now() }]);
  };

  const deleteSuti = (id) => {
    setSutik(sutik.filter((s) => s.id !== id));
  };

  const startEdit = (suti) => {
    setEditingSuti(suti);
  };

  const updateSuti = (updatedSuti) => {
    setSutik(sutik.map((s) => (s.id === updatedSuti.id ? updatedSuti : s)));
    setEditingSuti(null);
  };

  return (
    <div className="container">
      <h1>Cukrászda CRUD</h1>

      <div className="flex-row">
        <div className="flex-large">
          <AddSutiForm
            addSuti={addSuti}
            editingSuti={editingSuti}
            updateSuti={updateSuti}
          />
        </div>

        <div className="flex-large">
          <h2>Sütik listája</h2>

          <table>
            <thead>
              <tr>
                <th>Azonosító</th>
                <th>Név</th>
                <th>Típus</th>
                <th>Ár</th>
                <th>Műveletek</th>
              </tr>
            </thead>
            <tbody>
              {sutik.length > 0 ? (
                sutik.map((suti) => (
                  <tr key={suti.id}>
                    <td>{suti.id}</td>
                    <td>{suti.nev}</td>
                    <td>{suti.tipus}</td>
                    <td>{suti.ar} Ft</td>
                    <td>
                      <button onClick={() => startEdit(suti)}>Szerkesztés</button>
                      <button onClick={() => deleteSuti(suti.id)}>Törlés</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Még nincs felvett süti.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;