/*
Escreva uma função chamada ePaisagem que
recebe dois argumentos, largura e altura
de uma imagem (number).
Retorne True se a imagem estiver no modo paisagem.
*/

//Forma de fazer
function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem(1920, 1080));

//outra forma de fazer utilizando as Arrow function expressions
//VALOR ANONIMO
const paisagem = (larguras, alturas) => larguras > alturas;
console.log(paisagem(1080.1920));

