import React, { useState } from "react";
import SutemenyTable from "/src/tables/SutemenyTable";
import EditSutemenyForm from "/src/forms/EditSutemenyForm";
import AddSutemenyForm from "/src/forms/AddSutemenyForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState("");
  const [editing, setEditing] = useState(false);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };
  const editRow = user => {
    setEditing(true);
    setCurrentUser(user);
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div>
       <div>
        <div>
          <div>
              <h2>{editing ? "Sütemény szerkesztése" : "Sütemény hozzáadása"}</h2>
              {!editing ? (
                <AddSutemenyForm
                  addUser={addUser}
                />
              ):(
                <EditSutemenyForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  updateUser={updateUser}
                />
              )}
          </div>
        </div>
        <div>
          <h2>Sütemények listája</h2>
          <SutemenyTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};
export default App;
