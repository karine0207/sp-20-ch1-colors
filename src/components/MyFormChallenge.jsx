import { useEffect, useRef, useState } from "react";
import BoxColor from "./BoxColor";


const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];


const colorMap = {
  rojo: 'red',
  verde: 'green',
  rosa: 'pink',
  amarillo: 'yellow',
  púrpura: 'purple',
  blanco: 'white',
  azul: 'blue',
  aqua: 'aqua',
  oliva: 'olive'
};

function MyForm() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const translatedColor = colorMap[value];
  const isValidColor = !!translatedColor;

  return (
    <section>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe un color en español"
        value={value}
        onChange={() => setValue(inputRef.current.value.toLowerCase())}
      />

      {!isValidColor && value !== '' && (
        <div className="message">"{value}" no es un color válido</div>
      )}

      <div className="container">
        {colors.map(color => (
          <BoxColor
            key={color}
            color={color}
            value={translatedColor || value} 
          />
        ))}
      </div>
    </section>
  );
}

export default MyForm;
