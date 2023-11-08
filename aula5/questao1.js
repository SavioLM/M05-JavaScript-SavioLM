let pessoa = {};
pessoa.nome = "Savio";
pessoa.idade = 24;

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);

pessoa.idade = 18;
console.log("Nova idade: " + pessoa.idade);

let pessoa2 = {
    nome: "Alice", 
    idade: 19,
};

for (let i in pessoa2)
    console.log(`${i}: ${pessoa2[i]}`);

pessoa2.apresentaçao = function() {
    console.log(`Oi, sou a ${this.nome}.`)
};

pessoa2.apresentaçao();

pessoa.email = "email_fic@gmail.com";
console.log("Email: " + pessoa.email);