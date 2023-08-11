const array = [1,2,3]; //Pode fazer alteração, mas não pode atribuir
array.push(4);
array[0] = 'Gustavo'; //Pode fazer a alteração, pq está fazendo alteração nos elemntos dentro do Array
console.log(array);
//Não pode fazer array = 'Outra';
//Caso queira fazer isso use let

let array1 = [1,2,3];
array1.push(4);
array1[0] = 'Gustavo';
array1 = 'Outra';
console.log(array1);
// Diferença { } <- aqui você esta criando um objeto
// DIFERENÇA [ ] <- Aqui você esta criando uma array
const pessoa1 = {
  nome: 'Gustavo',
  sobrenome: 'Siqueira',
  estadocivil: 'Namorando',
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.estadocivil);

function criaPessoa (nome1, sobrenome1, estadocivil1) {
    return {nome1, sobrenome1, estadocivil1};
}
const pessoal3 = criaPessoa('Gustavo', 'Siqueira', 'namorando');
const pessoal2 = criaPessoa('Arielly', 'Siqueira', 'namorando');
console.log(pessoal3.nome1, pessoal2.nome1);

const pessoa10 = {
    nome10: 'Gustavo',
    sobrenome10: 'Siqueira',
    estadocivil10: 'Namorando',
    idade10: 27,

    fala() {
        console.log(`${this.nome10} ${this.sobrenome10} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade10}.`);
    },
    incremetaIdade() {
        this.idade10++;
    }
};
pessoa10.fala();
pessoa10.incremetaIdade();
pessoa10.fala();