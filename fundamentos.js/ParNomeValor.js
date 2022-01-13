// par nome/ valor
const saudacao = "opa"; // contexto lexico 1

function exec() {
  const saudacao = "falaaa"; // contexto lexico 2
  return saudacao;
}

// objetos são grupos alinhados de chave e nome/valor
const cliente = {
  nome: "leonardo",
  idade: 21,
  peso: 45,
  endereco: {
    logradouro: "Rua B, Quadra D",
    numero: "casa 3",
  },
};
console.log(saudacao);
console.log(exec());
console.log(cliente);
