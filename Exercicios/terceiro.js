/*
Escreva uma função que recebe um número e
terone o seguinte:

Número é divisível por 3 = Fizz;
Número é divisível por 5 = Buzz;
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/

//Function recebe div -> numero
function div (numero) {
    //se tipo numero for diferente de numbero, retorna numero
    if (typeof numero !== 'number') return numero;
    //se (RESTO DA SOMA NUMERO DIVIDIO POR TRÊS)
    if (numero % 3 === 0) return 'Fizz';
    //se (RESTO DA SOMA NUMERO DIVIDIO POR CINCO)
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    //return numero
    return numero;
}

// vai de 0 até 100, soma os 100 números
for (let i = 0; i <= 100; i++) {
    console.log(i, div(i));
}