import AppButton from "../../shared/styledComponents/button/AppButton";

const Home = () => {
  return (
    <div>
      <AppButton variant="contained" className="w-full">
        Test Ripple
      </AppButton>
      <table
        style={{
          backgroundColor: "#f2f2f2",
          borderRadius: "5px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Uživatel</th>
            <th>Přihlašovací jméno</th>
            <th>Poslední přihlášení</th>
            <th>Akce</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#f2f2f2", borderRadius: "5px" }}>
            <td>
              <img src="user_photo.jpg" alt="User Photo" />
              <span>Jméno uživatele</span>
              <span>Role</span>
            </td>
            <td>Přihlašovací jméno</td>
            <td>Poslední přihlášení</td>
            <td>
              <button>Editovat</button>
            </td>
          </tr>
          <tr style={{ backgroundColor: "#f2f2f2", borderRadius: "5px" }}>
            <td>
              <img src="user_photo.jpg" alt="User Photo" />
              <span>Jméno uživatele</span>
              <span>Role</span>
            </td>
            <td>Přihlašovací jméno</td>
            <td>Poslední přihlášení</td>
            <td>
              <button>Editovat</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
