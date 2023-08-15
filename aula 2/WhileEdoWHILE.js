/*
While e do While (Estrutura de repetição)
*/

let controle = 0;

while (controle <= 10) {
    console.log(controle);
    controle++;
}

console.log ('Segue a vida...');

const nome = 'Gustavo';
let i = 0;

while (i < nome.length) {
    console.log(nome[1]);
    i++;
}

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 25;
let rand = random(1, 25);
console.log(rand);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('########');
do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);