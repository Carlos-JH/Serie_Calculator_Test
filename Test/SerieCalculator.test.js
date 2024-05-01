// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import Calculator from "../components/Calculator";
 import '@testing-library/jest-dom';
 
 import {SerieCalculator} from '../SerieCalculator';


 //Puebas para serie completa
 describe('SerieCalculator', () => {
   let calculator;
 
   beforeEach(() => {
     calculator = new SerieCalculator();
   });
 
   test('Return 0 para Serie donde n <= 2', () => {
     calculator.calcularSerie(1);
     expect(calculator.serieResult).toBe(0);
 
     calculator.calcularSerie(2);
     expect(calculator.serieResult).toBe(0);
   });
    // test del 3 al 10
    for (let num = 3; num <= 10; num++) {
        test(`calcula serie para n = ${num}`, () => {
            let xp = calculateExpectedValue(num);
            calculator.calcularSerie(num);
            expect(calculator.serieResult).toBe(xp);
            console.log(`Valor de Serie cuando N= ${num} =>`, xp);
        });
    }
 

    //CASO SI FUERA 1 A 1
//    test('calcula serie para n = 3', () => {
//     let num = 3;
//     let xp = calculateExpectedValue(num);
//      calculator.calcularSerie(num);
//      expect(calculator.serieResult).toBe(xp);
//      console.log("Valor de Serie cuando N= 3 =>", xp);

//    });


 });


 //Pruebas para Triangular
 describe('subFunctionsSerieCalculatorTriangular', () => {
    let calculator;
        // Triangular(0) = 0
        // Triangular(1) = 1
        // Triangular(2) = 3
        // Triangular(3) = 6
        // Triangular(4) = 10
        // Triangular(5) = 15
    beforeEach(() => {
      calculator = new SerieCalculator();
    });

    test('Return 1 para Triangular cuando n = 1', () => {
        const result = calculator.triangular(1);
        expect(result).toBe(1);
        console.log("Valor de Triangular n=1 => ",result);
    });
    test('Return 3 para Triangular cuando n = 2', () => {
        const result = calculator.triangular(2);
        expect(result).toBe(3);
        console.log("Valor de Triangular n=2 => ",result);
    });
    test('Return 6 para Triangular cuando n = 3', () => {
        const result = calculator.triangular(3);
        expect(result).toBe(6);
        console.log("Valor de Triangular n=3 => ",result);
    });
    test('Return 10 para Triangular cuando n = 4', () => {
        const result = calculator.triangular(4);
        expect(result).toBe(10);
        console.log("Valor de Triangular n=4 => ",result);
    });
    test('Return 15 para Triangular cuando n = 5', () => {
        const result = calculator.triangular(5);
        expect(result).toBe(15);
        console.log("Valor de Triangular n=5 => ",result);
    });
});

//Pruebas para finobaccis



// Función auxiliar para calcular el valor esperado de la serie
function calculateExpectedValue(n) {
    const triangularResult = triangular(n - 2);
    const esPrimo = esNumPrimo(n);
    const fibonacciResult = fibonacci(n - 1);
    const serieResult = (2 * triangularResult) * (3 * (esPrimo ? n - 2 : 1)) * (7 * fibonacciResult);
    return serieResult;
    
        
      }


// Método para calcular el número triangular de un número dado n
function triangular(numInput) {
    return numInput * (numInput + 1) / 2;
}

// Método para verificar si un número es primo
function esNumPrimo(numInput) {
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

// Método para calcular el número de Fibonacci de un número dado
function fibonacci(numInput) {
    if (numInput <= 1) return numInput;
    let a = 0, b = 1;
    for (let i = 2; i <= numInput; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}



// En este código:

// describe() se utiliza para agrupar las pruebas relacionadas.
// beforeEach() se utiliza para crear una nueva instancia de SerieCalculator antes de cada prueba.
// test() define cada caso de prueba. Puedes llamar a 
// calcularSerie() con diferentes valores y 
// luego verificar el resultado esperado con 
// expect(). 
