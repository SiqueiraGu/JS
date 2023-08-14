/*
Atribuição Via Desestruturação (OBJETOS)
*/

const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Siqueira',
    idade: 40,
    edereco: {
        rua: 'Jamburana',
        numero: 31
    }
};
//Você pega um valor e joga numa variável
//Atribuição via desestruturação
const nome = pessoa.nome;
console.log(pessoa.nome);

const pessoa1 = {
    nome1: 'Gustavo',
    sobrenome1: 'Siqueira',
    idade1: 40,
    endereco: {
        rua1: 'Jamburana',
        numero1: 31
    }
};

const {nome1, sobrenome1} = pessoa1;
const { endereco: { rua1, numero1}, endereco } = pessoa1;
console.log(nome1, sobrenome1);
console.log(rua1, numero1, endereco); 

