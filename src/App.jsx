import { useState } from "react";
import "./App.css";
import SutiTable from "./tables/SutiTable";
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
          <SutiTable
            sutik={sutik}
            startEdit={startEdit}
            deleteSuti={deleteSuti}
          />
        </div>
      </div>
    </div>
  );
};

export default App;