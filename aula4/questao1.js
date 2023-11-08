let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
];

console.log("\nTodas as tarefas")
tarefas.forEach(function (t, p) {
    console.log(`${p+1} = ` + t);
})

let pendentes = tarefas.filter(function (e) {
    return e.indexOf("Feito") < 0;
})

console.log("\nTarefas Pendentes")
pendentes.forEach(function (t, p) {
    console.log(`${p+1} = ` + t);
})

console.log("\nTarefa ordenada")
let o = tarefas.slice().sort().forEach(function (t, p) {
    console.log(`${p+1} = ` + t);
})

console.log("\nDuas primeiras tarefas")
tarefas.slice(0,2).forEach(function (t, p) {
    console.log(`${p+1} = ` + t);
})

console.log("\nUltima tarefa removida")
tarefas.pop()
tarefas.forEach(function (t, p) {
    console.log(`${p+1} = ` + t);
})

console.log("\nTarefa adicionada no final da lista")
tarefas.push("Ler livro novo")
tarefas.forEach(function (t, p) {
    console.log(`${p+1} = ` + t);
})