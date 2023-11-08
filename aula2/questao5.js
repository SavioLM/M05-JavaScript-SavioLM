const prompt = require("prompt-sync")();

let palavra = prompt("Digite uma palavra: ");

let tamanho = palavra.length;
let invertida = "";
for (let i = tamanho - 1; i >= 0; i--) {
    invertida += palavra[i];
}

console.log("Texto invertido: "+invertida)