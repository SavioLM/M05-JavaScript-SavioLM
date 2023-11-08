const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número: "));
let cont = 0;
let soma = 0;

if (numero == 0) {
    console.log("Nenhum número foi digitado")
}
else {
    while (numero != 0) {
        cont++;
        soma += numero;
        numero = parseInt(prompt("Digite um número: "));
    }

    console.log("A média dos números digitados é", soma/cont);
}