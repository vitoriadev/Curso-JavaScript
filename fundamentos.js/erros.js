function tratarErroELancar(erro) {
  // throw new Error('...')
  // thwor 10
  // thwor true
  // thwor 'mensagem'

  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}
function imprimirNomeGritando(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("final");
  }
}

const obj = { nome: "Roberto" };
imprimirNomeGritando(obj);
