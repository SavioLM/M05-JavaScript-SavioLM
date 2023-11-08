const prompt = require("prompt-sync")();

let primeiro_numero = parseInt(prompt("Digite o peimeiro número: "));
let segundo_numero = parseInt(prompt("Digite o segundo número: "));
let resp = 0;
for (let i = 0; i < primeiro_numero; i++) {
     resp += segundo_numero;
}

console.log(resp);

