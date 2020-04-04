import React, { useState } from "react";
import "./styles.css";
import TextChecker from "./TextChecker";

export default function App() {
  const [itemsNumber, setItemsNumber] = useState(18);

  return (
    <div className="App">
      <h1>Local Text Checker</h1>
      <TextChecker itemsNumber={itemsNumber} setItemsNumber={setItemsNumber} />
    </div>
  );
}
