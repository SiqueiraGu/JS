/*
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
*/

//For Clássico - Geralmente com iteráveis (array ou string)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou string)


//para
// i Significa index
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//Aqui ele começa na linha 400 até 500, você pode manipular
for (let i = 400; i<=500; i++) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i<=10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}

//FOR IN


//array que só tem uma dimenssão
const frutinhas = ['PERA', 'MAÇÃ', 'UVA'];

for (let i = 0; i< frutinhas.length; i++) {
    console.log(frutinhas[i]);
}

//Ele não esta contando como o for de cima, ele esta ledo o indice do ARRAY
for (let i in frutinhas) { //Variável do i, você pode dar o nome que quiser para ela!!
    console.log(i);
}

const humano = {
    nome: 'Gustavo',
    Sobrenome: 'Siqueira',
    idade: 90
}
//Você consegue manipular a variável i
for (let keys in humano) {
    console.log(keys);    
}

const humanos = {
    nome: 'Gustavo',
    Sobrenome: 'Siqueira',
    idade: 90
};
//Isso aqui é último quando não sabe qual propriedade irá pegar
console.log(humanos.nome);
console.log(humanos['nome']);

const teste = {
    nome: 'Gustavo',
    sobrenome: 'Siqueira',
    idade: 80
};

for (let chaves in teste) {
    console.log(chaves, teste[chaves]);
}

//FOR OF
//Ela é iteravel
const name = 'Gustavo Siqueira';

//AQUI SÉRIA USADO O FOR CLASSICO
for (let i = 0; i < name.length; i++) {
    //Você acessa cada letra do indice
    console.log(name[i]);
}

console.log('#####');
const name1 = 'Arielly Siqueira'
//AQUI SÉRIA USADA O FOR IN
for (let i in name1) {
    console.log(name1[i]);
}

console.log('#####');
const name2 = 'Moly'
//NÃO VEM O INDICE, VEM O VALOR
for (let valor of name2) {
    console.log(valor);
}
console.log('#####');

const name3 = ['Gustavo', 'Nunes', 'Siqueira'];

name3.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});