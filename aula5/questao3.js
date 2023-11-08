const animalDeEstimacao = {
    nome: "Rex",
    especie: "Cachorro",
    idade: 3,
  
    fazerBarulho: function() {
      console.log(`O ${this.nome} está latindo!`);
    },
  
    envelhecer: function() {
      this.idade++;
    },
  
    trocarNome: function(novoNome) {
      this.nome = novoNome;
    }
};
  
  
console.log("Nome: " + animalDeEstimacao.nome);
console.log("Espécie: " + animalDeEstimacao.especie);
console.log("Idade: " + animalDeEstimacao.idade);

animalDeEstimacao.fazerBarulho();

animalDeEstimacao.envelhecer();
console.log("Nova idade: " + animalDeEstimacao.idade);

animalDeEstimacao.trocarNome("Tiranossarro");
console.log("Novo nome: " + animalDeEstimacao.nome);