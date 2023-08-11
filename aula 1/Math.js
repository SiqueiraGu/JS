let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2);
//Math.floor ele arredonda para baixo o número, tira as casas decimal

let num3 = 9.4156;
let num4 = Math.ceil(num3);
console.log(num4);
//Math.ceil ele arredonda o número para cima, tira as casas decimal

let num5 = 9.4158;
let num6 = Math.round(num5);
console.log(num6);
/*Ele coloca o número mais próximo como o num5 é 9.4 ele vai arredonda para baixo
caso o número for 9.50 ele vai arredondar para cima*/

let num7 = 9.5;
console.log(Math.max(1,2,3,4,5,6,-10,-50,1500,9,8,7,6));
//Math.max pega o maior número da sequencia
console.log(Math.min(1,2,3,4,5,6,-10,-50,1500,9,8,7,6));
//Math.min pega o menor número da sequencia
console.log(Math.random());
//Math.random gera um número aleatorio

const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);
//Ele vai pegar um número aleatorio entre 10 é 5

const aleatorio1 = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio1);
//Ele vai pegar um número aleatorio entre 10 e 5 de números sem ponto flutuante

console.log(Math.PI); //Número de PI
console.log(Math.pow(2,10)); //Elevado -> Tem um próprio operador para isso
console.log(Math.sqrt(10)); //Raiz quadrada

let num8 = 9;
console.log(num1 ** (1/2));
// ** -> mesmo de Math.sqrt

console.log(100 / 0); //Ele vai dar um dado númerico Infinity, ele é avaliado como verdadeiro
