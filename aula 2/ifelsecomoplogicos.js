/*
Operadores Lógicos usando IF/ELSE IF/ELSE
*/


// Or ||
const numero = 10;

if (numero === 7 || numero === 9 || numero === 8 || numero === 10) {
    console.log(`O horário atual é: ${numero} horas`);
}
else {
    console.log(`O horário atual esta errado`);
}

// And &&
const numeros = 16;

if (numeros === 7 && numeros && 9 && numeros === 16 && numeros === 14) {
    console.log(`O horário agora é de: ${numeros} horas!`);
}
else if (numeros === 16 && numeros && 16 && numeros === 16 && numeros === 14) {
    console.log(`O horário agora é de: ${numeros} horas!`);
}
else {
    console.log(`O horário agora é de: ${numeros} horas!`);
}

//Outros exemplos

const n = 10;

if (n >= 0 && n <= 5) {
    console.log(`Sim, o número é maior ou igual a zero.`);
}
else {
    console.log(`O número não esta entre 0 e 5.`);
}

const n1 = 10;

if (n1 >= 0 && n1 <= 5) {
    console.log(`Sim, o número é maior ou igual a zero`);
}
//Aqui a variavel 10 não entra na condição IF então executa a execução abaixo, sem precisar de else.
console.log(`O número NÃO está entre 0 e 5.`);

const number = 10;

if (number >= 0 && number <= 5) {
    console.log(`O número está entre 0 e 5.`);
}
else if (number >= 6 && number <= 8) {
    console.log(`O número está entre 6 e 8`);
}
else if (number >= 9 && number <= 11) { //Vai executar esse bloco de comandos, que é verdadeiro
    console.log(`O número está entre 9 e 11`);
}
else {
    console.log(`O número não está entre 0 e 11.`)
}