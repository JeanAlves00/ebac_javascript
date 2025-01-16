// 1. Definição de Variáveis e Tipos Básicos
const texto = "Olá, mundo!"; // String
const numero = 42; // Número
const booleano = true; // Booleano

console.log("Tipo de texto:", typeof texto); // string
console.log("Tipo de numero:", typeof numero); // number
console.log("Tipo de booleano:", typeof booleano); // boolean

// 2. Objeto Básico
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);

// 3. Atributos de Objeto
carro.cor = "Prata";
console.log("Cor:", carro.cor);

// 4. Atualizando Valores de Atributos
carro.ano = 2022;
console.log("Ano atualizado:", carro.ano);

// 5. Tipos de Dados e Operações
function operacoes(num1, num2) {
  return {
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num1 / num2
  };
}

const resultados = operacoes(10, 2);
console.log("Soma:", resultados.soma);
console.log("Subtração:", resultados.subtracao);
console.log("Multiplicação:", resultados.multiplicacao);
console.log("Divisão:", resultados.divisao);
