import { useRef, useState } from "react";
import Promo from "../components/Promo";
import Intro from "../components/Intro";
import Video from "../components/Video";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const inputEl = useRef(null);

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function onHandleClick() {
    inputEl.current.focus();
  }

  return (
    <div>
      <Video />
      <h1>Konunun başlığını giriniz</h1>
      <input
        value={inputText}
        onChange={handleChange}
        ref={inputEl}
        type="text"
      />
      <Intro
        description="Bu konu Edison ile Tesla'dan bahsedecektir"
        header={inputText}
      />
      <button
        onClick={() => {
          setInputText("");
          onHandleClick();
        }}
      >
        Reset
      </button>
      <Promo />
    </div>
  );
}
