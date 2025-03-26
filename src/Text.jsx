import { useState } from "react";

const Text = () => {
  const [text, setText] = useState(["Opción 1", "Opción 2", "Opción 3"]);

  const cambiarTexto = () => {
    setText(["Animales", "Animales", "Animales"]);
  };

  return (
    <div>
      <p id="menu1">{text[0]}</p>
      <p id="menu2">{text[1]}</p>
      <p id="menu3">{text[2]}</p>
      <button onClick={cambiarTexto}>Click para cambiar textos</button>
    </div>
  );
};

export default Text;
