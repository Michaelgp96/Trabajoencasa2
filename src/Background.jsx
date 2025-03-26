import { useState } from "react";

const Background = () => {
  const [color, setColor] = useState("white");

  const cambiarFondo = () => {
    setColor("gray");
  };

  return (
    <div style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}>
      <button onClick={cambiarFondo}>Click para cambiar el color</button>
    </div>
  );
};

export default Background;
