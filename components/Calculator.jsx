import React, { useState, useEffect } from 'react';
import Result from './Result';
import {SerieCalculator} from '../SerieCalculator';


const Calculator = ({ inputValue, calculateClicked }) => {
  const [serieCalculator,setSerieCalculator] = useState(new SerieCalculator());

  useEffect(() => {
    if (calculateClicked) { //si mandamos llamar el metofo
      const s = new SerieCalculator(); //creamos nuevo objeto y lo sete arriba
      s.calcularSerie(parseInt(inputValue)); //variable de estado
      setSerieCalculator(s);
     
    }
  }, [ calculateClicked]);

  return (
    <div>
      {calculateClicked && (
        <Result
          esPrimo={serieCalculator.esPrimo}
          fibonacciResult={serieCalculator.fibonacciResult}
          triangularResult={serieCalculator.triangularResult}
          serieResult={serieCalculator.serieResult}
        />
      )}
    </div>
  );
};

export default Calculator;
