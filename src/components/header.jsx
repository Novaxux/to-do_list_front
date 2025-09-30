import logoutIcon from "../assets/icons/logout.svg";
const Header = () => {
  const handleLogout = async () => {
    try {
      console.log("Sesión cerrada correctamente");
      const logoutUrl = `${import.meta.env.VITE_AUTH}/logout.php`;
      window.location.href = logoutUrl; 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <header className="header">
      <h1>My To-Do List 🖉</h1>
      <button className="logout-btn" onClick={handleLogout}>
        <img src={logoutIcon} alt="logout" />
      </button>
    </header>
  );
};

export default Header;