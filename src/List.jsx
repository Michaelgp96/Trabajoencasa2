import { useState } from "react";

const List = () => {
  const [mostrar, setMostrar] = useState(false);

  const persona = {
    nombre: "Michael Gonzalez",
    edad: 25,
    correo: "Michael123@gmai.com",
  };

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar información</button>
      {mostrar && (
        <div>
          <p><strong>Nombre:</strong> {persona.nombre}</p>
          <p><strong>Edad:</strong> {persona.edad}</p>
          <p><strong>Correo:</strong> {persona.correo}</p>
        </div>
      )}
    </div>
  );
};

export default List;
