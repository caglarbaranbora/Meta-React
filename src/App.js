import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
