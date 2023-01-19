import React from "react";
import useClima from "../hooks/useClima";
function Resultado() {
  const { resultado } = useClima();
  const { name, main } = resultado;
  const { temp, temp_min, temp_max } = main;

  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      <h2 className="">El clima de {name} es:</h2>
      <p className="">
        {parseInt(temp - kelvin)} <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p className="">
          Minima: {parseInt(temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p className="">
          Maxima: {parseInt(temp_max - kelvin)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
}

export default Resultado;
