import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Projects from "./Pages/ProjectPage/Projects";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const closeMenu = () => {
    const navbarMenu = document.getElementById("navbar-menu");
    navbarMenu.classList.add("hidden");
  };

  return (
    <>
      <div className="w-full h-screen" onClick={closeMenu}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Navbar />
    </>
  );
}

export default App;
