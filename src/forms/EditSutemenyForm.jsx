import React, { useState, useEffect } from "react";

const EditSutemenyForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props.currentUser]);
  
  return (
    <form
    className="suti-form"
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Sütemény id</label>
      <input type="text" name="id" value={user.id} onChange={handleInputChange}/>
      <label>Sütemény neve</label>
      <input type="text" name="sutiNev" value={user.sutiNev} onChange={handleInputChange}/>
      <label>Sütemény típusa</label>
        <select
          name="sutiTipus"
          value={user.sutiTipus}
          onChange={handleInputChange}
        >
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
        <select name="dijazott" value={user.dijazott} onChange={handleInputChange}>
        <option value="Igen">Igen</option>
        <option value="Nem">Nem</option>
      </select>

      <button type="button" onClick={() => props.editRow(user)}>Módosítás</button>
      <button type="button" onClick={() => props.deleteUser(user.id)}>Törlés</button>
    </form>
  );
};
export default EditSutemenyForm;
