import React from "react";

const SutemenyTable = props => (
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
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.sutiNev}</td>
            <td>{user.sutiTipus}</td>
            <td>{user.dijazott}</td>
            <td>
              <button onClick={() => {props.editRow(user);}}>Módosítás</button>
              <button onClick={() => props.deleteUser(user.id)}>Törlés</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>Nincs sütemény</td>
        </tr>
      )}
    </tbody>
  </table>
);
export default SutemenyTable;