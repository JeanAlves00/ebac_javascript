//declarar uma funcao

function calcular_area(raio)
{
    const pi = 3.14;
    return pi * raio * raio;
}

let raio = 5;
let area = calcular_area(raio);
console.lohg(`A area do circulo de raio ${area} eh ${raio}`);