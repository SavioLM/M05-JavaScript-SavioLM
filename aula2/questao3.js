const prompt = require("prompt-sync")();


while(true) {
    let cond = prompt("Informe se deseja imprimir um retângulo (s/n): ");
    if (cond == "s") {
        let largura = parseInt(prompt("Digite a largura do retângulo: "));
        let altura = parseInt(prompt("Digite a altura do retângulo: "));

        function fazer_retangulo(l, a) {
            let resultado = "";
            for (let i = 0; i < a; i++) {
                for (let j = 0; j < l; j++) {
                    resultado += "*"
                }
                if (i + 1 != a) {
                    resultado += "\n"
                }
            }
            return resultado
        }

        if (largura < altura) {
            console.log("Altura maior que largura :(");
        }
        else {
            console.log(fazer_retangulo(largura,altura));
        }
    }
    else {
        console.log("Programa encerrado!");
        break;
    }
}