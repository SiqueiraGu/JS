//String é uma variável de texto
//String são indexadas, cada carateres tem um indice, seja ele do número do seu texto.
let umaString = 'Um "texto"';
let duasString = "Outro \"texto\""; 
let string = 'Um texto';
let strings = 'Correndo no campo';
let text = 'textinho';
let frase = 'O rato roeu a roupa do rei de roma.';
let frase1 = 'Gustavo Gosta de Pudim Gostoso, mas ele e Gordo';
let nome = 'Gustavo Nunes Siqueira.';

console.log(umaString);
console.log(duasString);
console.log(string[4]); //Você esta buscando a letra E que é a de indice número 4
console.log(string[-1]); //Caso coloque negativo ele irá te retorna undefined.
console.log(umaString.charAt(6));//Mesma função de pegar uma única letra.
console.log(`${strings} em um lindo dia`); //Melhor forma de mostra no console
console.log(text.length); // Informa quantas caracteres tem na string
console.log(frase.slice(3, 8)); //Ele escolhe o indice que começa até o número do indice que termina
console.log(frase1.split('G')); //Retira a letra selecionada
console.log(frase1.search(/[a]/)); //Sempre vai retorna o índice
console.log(nome.replace(/Gustavo/, 'Siqueira')); //Troca uma palavra pela outra
console.log(nome.length); //Para saber quantos caracteres tem
console.log(nome.slice(-5, nome.length -1)); //Para ler o final da string
console.log(nome.toUpperCase()); //Deixar a string toda maiuscula
console.log(nome.toLowerCase()); //Deixar a string toda minuscula
console.log(nome.match(/[a-z]/g)); // separa as letras
console.log(nome.split(' ', 3)); // separa as palavras