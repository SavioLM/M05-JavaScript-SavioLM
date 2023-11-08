let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

function ehPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
  
let numerosPrimos = numeros.filter(ehPrimo);
console.log("\nNúmeros Primos");
console.log(numerosPrimos);

let quadradosDosPrimos = numerosPrimos.map(numero => numero ** 2);
console.log("\nQuadrados dos Números Primos:");
console.log(quadradosDosPrimos);

