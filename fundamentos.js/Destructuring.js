// novo recurso ES2015
// desestrtura, tira algo.

const pessoa = {
  nome: "Ana",
  idade: 35,
  Endereço: {
    logradouro: "Rua b",
    numero: 1000,
  },
};
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);
