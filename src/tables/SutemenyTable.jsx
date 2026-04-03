import React from "react";

const SutemenyTable = props => (
  <table>
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
              <button onClick={() => {props.editRow(user);}}>Edit</button>
              <button onClick={() => props.deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);
export default SutemenyTable;