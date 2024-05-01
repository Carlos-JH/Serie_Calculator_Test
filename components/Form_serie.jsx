import React from "react";

function SerieCalculator({ inputValue, onInputChange }) {
  // Función para evitar números negativos y puntos decimales
  const handleKeyDown = (e) => {
    if (e.key === "-" || e.key === ".") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <input
        onKeyDown={handleKeyDown}
        type="number"
        className="form-control"
        id="numberN"
        placeholder="Introducir número"
        value={inputValue}
        onChange={onInputChange}
        pattern="[0-9]*" // Permite solo números enteros positivos
      />
    </div>
  );
}

export default SerieCalculator;
