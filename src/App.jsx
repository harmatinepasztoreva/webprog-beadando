import React, { useState } from "react";
import SutemenyTable from "/src/tables/SutemenyTable";
import EditSutemenyForm from "/src/forms/EditSutemenyForm";
import AddSutemenyForm from "/src/forms/AddSutemenyForm";
import "./App.css";

const App = () => {
  const usersData = [
    { id: 1, sutiNev: "Dobos torta", sutiTipus: "torta", dijazott: "Igen" },
    { id: 2, sutiNev: "Krémes", sutiTipus: "krémes", dijazott: "Nem" },
    { id: 3, sutiNev: "Bejgli", sutiTipus: "bejgli", dijazott: "Igen" },
  ];

const initialFormState = {
    id: null,
    sutiNev: "",
    sutiTipus: "",
    dijazott: "Igen",
  };

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
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
    setCurrentUser({
      id: user.id,
      sutiNev: user.sutiNev,
      sutiTipus: user.sutiTipus,
      dijazott: user.dijazott,
    });
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
        <div className="suti-table">
          <h2>Sütemények listája</h2>
          <SutemenyTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};
export default App;
