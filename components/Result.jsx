import React from 'react';

const Result = ({ esPrimo, fibonacciResult, triangularResult, serieResult }) => {
   

    const P = esPrimo;
    const F = fibonacciResult;
    const T = triangularResult;
    const S = serieResult;
  return (
    <div>
       
      {/* <p>Primo: {P ? 'Sí' : 'No'}</p>
      <p>Número de Fibonacci: {F}</p>
      <p>Número triangular: {T}</p> */}
      <p style={{color:"red"}}  data-testid="result">Resultado de la serie: {S}</p>
    </div>
  );
};

export default Result;