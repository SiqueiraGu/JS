/*
Iperadores Lógicos
&& > AND >  E
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(true && true && true); //Para ser true todas as expressões tem que ser verdadeiro.
console.log(true || true || false); //Pelo menos uma expressão tem que ser verdadeiro.
console.log(!true); //Ele inverte uma expressão, ele nega a expressão
console.log(!!true); //Primeira expressao vai troca o true para false, mas como tem duas negações ela volta a ser true

const expressaoAnd = true && true && true && true;
const expressaoOr = true || false || false || true;
console.log(expressaoAnd);
console.log(expressaoOr);

//Este valor vai ser verdadeiro.
const usuario = 'Gustavo';
const senha = '123456';
const vailogar = usuario === 'Gustavo' && senha === '123456'; //Todas as expressões tem que ser verdadeiro
console.log(vailogar);

//Este valor vai ser verdader
const nome = 'Gustavo';
const sobrenome = 'Siqueira';
const qualnome = nome === 'Arielly' || sobrenome === 'Siqueira'; //Pelo meos uma expressão tem que ser verdadeiro
console.log(qualnome);