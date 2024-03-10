import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import MyProjects from "./components/Projects";
import Contact from "./components/Contact";
import "./components/styles/navbar.css"
import "./App.css"

function App() {
  const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <a className="navbar-brand" href="#">
          <img
            className="navbar-logo navbar-logo-light"
            src="/images/header/hello.jpeg"
            height="50px"
            alt="Logo"
          />
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/my-projects">
              My Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <Router>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route
            path="/contact"
            element={
              <Contact
                phoneNumber="323-691-5715"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
