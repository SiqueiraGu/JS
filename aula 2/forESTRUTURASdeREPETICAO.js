/*
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
*/


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