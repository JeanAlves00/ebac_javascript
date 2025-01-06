let verdadeiro = true;
let falso = false;

console.log(verdadeiro); // true
console.log(falso);      // false

let a = 10;
let b = 5;

console.log(a == b);  // false, comparação direta (igualdade)
console.log(a != b);  // true, comparação de diferença
console.log(a > b);   // true, maior que
console.log(a < b);   // false, menor que
console.log(a >= b);  // true, maior ou igual
console.log(a <= b);  // false, menor ou igual

let num = 10;
let str = "10";

console.log(num == str);  // true, igualdade não estrita (compara só o valor)
console.log(num === str); // false, igualdade estrita (compara valor e tipo)
console.log(num != str);  // false, desigualdade não estrita (compara só o valor)
console.log(num !== str); // true, desigualdade estrita (compara valor e tipo)
