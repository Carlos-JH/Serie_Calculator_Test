export class SerieCalculator {
    constructor() {
      this.esPrimo = false;
      this.fibonacciResult = 0;
      this.triangularResult = 0;
      this.serieResult = 0;
    }
  
      //  para calcular el número triangular de un número dado n
      triangular = (numInput) => {
          return numInput * (numInput + 1) / 2;
     }
  
    //  para verificar si un número es primo --> Algoritmo criba de Erastotenes
     esNumPrimo = (numInput) =>{
      if (numInput <= 1) return false;
      if (numInput <= 3) return true;
      if (numInput % 2 === 0 || numInput % 3 === 0) return false;
      let i = 5;
      while (i * i <= numInput) {
        if (numInput % i === 0 || numInput % (i + 2) === 0) return false;
        i += 6;
      }
      return true;
    }
  
    //  para calcular el número de Fibonacci de un número dado ""
    fibonacci = (numInput) => {
      if (numInput <= 1) return numInput;
      let a = 0, b = 1;
      for (let i = 2; i <= numInput; i++) {
        let temp = b;
        b = a + b;
        a = temp;
      }
      return b;
    }
  
  
  
    // Método para calcular la serie
    calcularSerie = (n) => {
      const num = parseInt(n);
      if (num <= 2) { //validamos que la entrada sea mayor a 3
        this.esPrimo = false;
        this.fibonacciResult = 0;
        this.triangularResult = 0;
        this.serieResult = 0;
      } else {
        const esPrimo = this.esNumPrimo(num);
        this.esPrimo = esPrimo;
        console.log("VALID_PRIM_: ", esPrimo);
  
        const fibonacciResult = this.fibonacci(num - 1);
        this.fibonacciResult = fibonacciResult;
  
        const triangularResult = this.triangular(num - 2);
        this.triangularResult = triangularResult;
  
        const serie = (2 * triangularResult) * (3 * (esPrimo ? num - 2 : 1)) * (7 * fibonacciResult);
        this.serieResult = serie;
      }
    }
  }
