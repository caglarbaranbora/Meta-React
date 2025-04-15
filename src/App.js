import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Promo from "./Promo";
import Intro1 from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <body>
        <Promo />
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </body>
      <Footer />
    </div>
  );
}

export default App;
