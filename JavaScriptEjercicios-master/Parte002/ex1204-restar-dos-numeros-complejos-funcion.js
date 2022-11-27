// Ejercicio 1204: Definir una nueva función para restar dos números complejos.

class NumeroComplejo {
    constructor(real, imaginaria) {
        this.real = real;
        this.imaginaria = imaginaria;
    }

    sumar(otroComplejo) {
        return new NumeroComplejo(this.real + otroComplejo.real, this.imaginaria + otroComplejo.imaginaria);
    }

    restar(otroComplejo) {
        return new NumeroComplejo(this.real - otroComplejo.real, this.imaginaria - otroComplejo.imaginaria);
    }
}

let numero1 = new NumeroComplejo(2, 3);
let numero2 = new NumeroComplejo(-5, 7);

let resultadoResta = numero1.restar(numero2);
console.log(resultadoResta);
