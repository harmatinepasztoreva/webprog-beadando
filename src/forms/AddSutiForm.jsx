import { useState, useEffect } from "react";

const AddSutiForm = ({ addSuti, editingSuti, updateSuti }) => {
  const [suti, setSuti] = useState({
    nev: "",
    tipus: "",
    ar: ""
  });

  // Ha szerkesztünk → töltsük be az adatot
  useEffect(() => {
    if (editingSuti) {
      setSuti(editingSuti);
    }
  }, [editingSuti]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuti({ ...suti, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingSuti) {
      updateSuti(suti);
    } else {
      addSuti(suti);
    }

    setSuti({ nev: "", tipus: "", ar: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {editingSuti ? "Süti szerkesztése" : "Új süti hozzáadása"}
      </h2>

      <label>Süti neve</label>
      <input
        type="text"
        name="nev"
        value={suti.nev}
        onChange={handleChange}
      />

      <label>Típus</label>
      <input
        type="text"
        name="tipus"
        value={suti.tipus}
        onChange={handleChange}
      />

      <label>Ár (Ft)</label>
      <input
        type="number"
        name="ar"
        value={suti.ar}
        onChange={handleChange}
      />

      <button type="submit">
        {editingSuti ? "Mentés" : "Hozzáadás"}
      </button>
    </form>
  );
};

export default AddSutiForm;