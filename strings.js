//let saudacao = "ola";
//let nome = "mundo";

//concatenação de strings ou juntar para os intimos

//let mensagem_final = saudacao + " " + nome + "!";
//console.log(mensagem_final);

let frase = "tamanho da frase";

//comprimento da string
console.log(frase.length);

//deiar em maiuscula
console.log(frase.toUpperCase());

//deixar em minuscula
console.log(frase.toLowerCase());

//Encontrar um posicao da string
console.log(frase.indexOf("frase"));

//exibir uma parte da string
console.log(frase.slice(0, 7));

//exibir uma parte da string
let nova_frase = frase.replace("frase", "palavra");
console.log(nova_frase);

//interpolacao de strings
let nome = "Joaquim";
let idade = 20;

let mensagem = `Ola ${nome}, voce tem ${idade} anos.`;
console.log(mensagem);