const notas = [6.7, 7.4, 9.8,7.7]

for (i in notas) {
    console.log(i, notas[i])
}
const pessoa = {
    nome: 'Julia',
    sobrenome: 'Felix',
    idade: 18,
    peso: 85
}
for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
