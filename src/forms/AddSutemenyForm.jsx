import React, { useState} from "react";

const AddSutemenyForm = props => {
  const [user, setUser] = useState({id:"",sutiNev:"",sutiTipus:"",dijazott:""});
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      className="suti-form"
      onSubmit={event => {
        event.preventDefault();
        if (!user.sutiNev || !user.sutiTipus || !user.dijazott ) return;
        props.addUser(user);
        setUser({ id: "", sutiNev: "", sutiTipus: "", dijazott: "Igen" });
      }}
    >
      <label>Sütemény id</label>
      <input
        type="text"
        name="id"
        value={user.id}
        onChange={handleInputChange}
      />

     <label>Sütemény neve</label>
      <input
        type="text"
        name="sutiNev"
        value={user.sutiNev}
        onChange={handleInputChange}
      />

      <label>Sütemény típusa</label>
      <select
        name="sutiTipus"
        value={user.sutiTipus}
        onChange={handleInputChange}
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

      <label>Díjazott</label>
      <select
        name="dijazott"
        value={user.dijazott}
        onChange={handleInputChange}
      >
        <option value="">-- Válassz --</option>
        <option value="Igen">Igen</option>
        <option value="Nem">Nem</option>
      </select>

      <div className="form-action-buttons">
        <button type="submit">Mentés</button>
      </div>
    </form>
  );
};
export default AddSutemenyForm;
