/*
Diferença entre Var e Let
*/

//Você não pode sobre escrever a let, mas o var sim!
// Let tem escopo e bloco {....bloco }
// var só tem escopo de função


const verdadeira = true;
let nome = 'Gustavo'; //Criando
var nome2 = 'Gustavo';

if (verdadeira) {
    let nome = 'Gustavo'; //Criando
    console.log(nome, nome2);

if (verdadeira) {
    console.log('Ok');
}
if (verdadeira) {
    let nome = 'Outra coisa';
    console.log(nome, nome2);
}
}

let nome1 = 'Gustavo';
var nome3 = 'Gustavo';

if (verdadeira) {
    let nome1 = 'Gustavo';
    var nome3 = 'Gustavo';

    if (verdadeira) {
        var nome3 = 'Siqueira'; //redeclarando
        let nome1 = 'Outra coisa';
    }
}

console.log(nome1, nome3);

var sobrenome = 'Siqueira';

//Escopo da função e especial
function falaOi () {
    var nome4 = 'Gustavo';
    console.log(sobrenome);

    if (verdadeira) {
        console.log(sobrenome);
    }
}

falaOi();