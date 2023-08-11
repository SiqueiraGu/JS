//Arrays são diferentes de string, Array são indexadas por elementos
const alunos = ['Gustavo', 'Arielly', 'Molly', 1, true, null];
console.log(alunos);

const array = ['Gustavo', 'Arielly', 'Molly'];
console.log(array);
console.log(array[0]);
console.log(array[1]); //Mostra o indice do array

const aluno = ['Gustavo', 'Arielly', 'Molly'];
console.log(aluno.length); //Saber o tamanho do Array

const aluno1 = ['Gustavo', 'Arielly', 'Molly'];
aluno1[aluno1.lenght] = 'Maia'; // Adiciona mais um elemento a sua array
console.log(aluno1); 

const aluno2 = ['Gustavo', 'Arielly', 'Molly'];
aluno2.push('Maia');
console.log(aluno2); // Função e mais facil para adicionar

const aluno3 = ['Gustavo', 'Arielly', 'Molly'];
aluno3.unshift('Maia'); //Adiciona no começo do indice
console.log(aluno3);

const aluno4 = ['Gustavo', 'Arielly', 'Molly'];
const removido = aluno4.pop(); // Remove o último indice do fim
const removido1 = aluno4.shift(); //Remove do começo do indice.
console.log(removido1); //Mostra na tela o primeiro elemento que foi removido
console.log(removido); //mostra na tela qual string que foi removida
console.log(aluno4);

const alunos1 = ['Gustavo', 'Arielly', 'Molly'];
delete alunos1[1]; //Deleta o nome da array que você selecionar
console.log(alunos1);

const alunos2 = ['Gustavo', 'Arielly', 'Molly'];
console.log(alunos2[50]); //undefined, ele não joga um erro, mas ele fala que não esta definido.

const alunos3 = ['Gustavo', 'Arielly', 'Molly'];
alunos3.push('Maia'); //Adiciona na nossa array
console.log(alunos3.slice(0, 2)); // Você escolhe o elemento de X até Y da sua array

const alunos4 = ['Gustavo', 'Arielly', 'Molly'];
console.log(typeof alunos4); //Era para retorna aluno, mas o Array e considerado um objeto, ele e indexado automaticamente
console.log(alunos4 instanceof Array); //Pergunta se isso é uma Array
