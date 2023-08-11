/*
&& -> false && true -> false "O valor mesmo"
|| ->
FALSY 
false
0
'' " " ``
null / undefiened
NaN
*/

console.log('Gustavo Siqueira' && true && 'Arielly'); //Ele vai me retorna o último valor

/* Ele só vai retorna o valor do meio caso a expressão do meio for 0 -> '' -> " " -> ` ` ->
null / undefiened ou NaN */

//And
console.log('Gustavo' && '' && 'Arielly'); //ele vai retorna o valor do meio

function falaOi () {
    return 'Oi';
}
//falor false literal
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());

function falaViva () {
    return 'Viva';
}
let Executar; //Não precisa colocar = undefined, pq variável não tem valor.
console.log(Executar && falaViva());

// Or
console.log(0 || false || null || 'Gustavo Siqueira' || true);
//Gustavo Siqueira e uma string verdadeira para o JS por isso foi só executado;

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
//Caso trocar o null por 'vermelho', oq irá aparecer sera vermelho
console.log(corPadrao);

const a = 0;
const b = NaN;
const c = 'false'; //Vai ser executado esta string, caso ele tiver fora da ' ' e for só escrito false será executado NaN
const d = true;
const e = false;

console.log(a || b || c || d || e);