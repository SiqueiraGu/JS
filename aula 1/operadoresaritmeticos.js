// Aritméticos
// + Adição / Concatenação
// ** Potenciação(ELEVADO)
// - Subtração
// / Divisão
// * Multiplicação
// % Resto da Divsão
// ++ já faz a atribuiação a um número para a sua variável
const num1 = 5;
const num2 = 10;
console.log(num1 ** num2);
let contador = 1;
contador++; // contador = 1 + 1
console.log(contador);

let contador1 = 2;
contador1 += 2; // contador = contador + 2 = *(2 + 2)*
console.log(contador1);

// Nesse caso vai dar o resultado -> NaN - Not a Number
const num3 = 10;
const num4 = 'Gustavo';
console.log(num3 * num4);

// Ele vai converter o number para inteiro
const numero = 10;
const numero1 = parseInt('5');
console.log(numero + numero1);
console.log(typeof numero1);

const numero3 = 10;
const numero4 = parseFloat('5');
console.log(numero + numero3);
console.log(typeof numero4);


