const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número inteiro positivo: "));
if (numero <= 0) {
    console.log("Nenhum número na sequência :(");
}
else {
    switch (numero) {
        case 1:
            console.log("Sequência de Fibonacci até 1: \n0");
            break;
        case 2:
            console.log("Sequência de Fibonacci até 1: \n0, 1");
            break;
        default:
            let p = 0;
            let s = 1;
            let r = "0, 1"
            for (let i = 3; i <= numero; i++) {
                let atual = p + s;
                if (atual > numero) {
                    break;
                }
                r += ", " + atual;
                p = s;
                s = atual;
            }
            console.log("Sequêmcia de Fibonacci até "+numero+":")
            console.log(r)
            break;
    }
}
