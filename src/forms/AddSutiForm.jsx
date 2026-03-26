import React, { useState } from "react";

const AddSutiForm = (props) => {
  const [suti, setSuti] = useState({
    nev: "",
    tipus: "",
    ar: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSuti({ ...suti, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!suti.nev || !suti.tipus || !suti.ar) return;

        props.addSuti(suti);

        setSuti({
          nev: "",
          tipus: "",
          ar: "",
        });
      }}
    >
      <h2>Új süti hozzáadása</h2>

      <label>Süti neve</label>
      <input
        type="text"
        name="nev"
        value={suti.nev}
        onChange={handleInputChange}
      />

      <label>Típus</label>
      <input
        type="text"
        name="tipus"
        value={suti.tipus}
        onChange={handleInputChange}
      />

      <label>Ár (Ft)</label>
      <input
        type="number"
        name="ar"
        value={suti.ar}
        onChange={handleInputChange}
      />

      <button>Hozzáadás</button>
    </form>
  );
};

export default AddSutiForm;