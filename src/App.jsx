import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const closeMenu = () => {
    const navbarMenu = document.getElementById("navbar-menu");
    navbarMenu.classList.add("hidden");
  };

  return (
    <>
      <div className="w-full h-screen" onClick={closeMenu}>
        <HomePage />
      </div>
      <Navbar />
    </>
  );
}

export default App;
