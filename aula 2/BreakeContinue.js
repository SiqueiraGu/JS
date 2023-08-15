/*
Break e Continue
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//Pode ser qualquer tipo de for
for (let numero of numeros) {
    if (numero === 2) {
        //Ele pula o número
        continue;
    }

    if (numero === 5) {
        //pula o número
        continue;
    }

    console.log(numero);
}

const number = [1, 2 ,3 , 4 ,5, 6, 7, 8, 9];

for (let numbers of number) {

    if (numbers === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numbers);
    //Aqui ele sai do looping
    if (numbers === 7) {
        console.log('7 Encontrado, saindo...');
        break;
    }
}