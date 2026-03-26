const SutiTable = ({ sutik, startEdit, deleteSuti }) => {
  return (
    <div>
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
                  <button onClick={() => startEdit(suti)}>
                    Szerkesztés
                  </button>

                  <button onClick={() => deleteSuti(suti.id)}>
                    Törlés
                  </button>
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
  );
};

export default SutiTable;