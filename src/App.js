import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Promo from "./components/Promo";
import Intro from "./components/Intro";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div>
        <h1>Konunun basligini giriniz</h1>
        <input value={inputText} onChange={handleChange} />
        <Intro
          description="Bu konu Edison ile Tesla'dan bahsedecektir"
          header={inputText}
        />
        <button onClick={() => setInputText("")}>Reset</button>
        <Promo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
