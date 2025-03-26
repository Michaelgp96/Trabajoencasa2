import { useState } from "react";

const Ten = () => {
  const [numero, setNumero] = useState("");

  const verificarNumero = () => {
    if (parseInt(numero) > 10) {
      alert("Mayor o igual a 10");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingresa un número"
      />
      <button onClick={verificarNumero}>Click para crear una alerta</button>
    </div>
  );
};

export default Ten;
