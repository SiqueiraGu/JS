// Uma das formas de usar variável
let varA = 'A';
let varB = 'B';
let varC = 'C';
const y = varA;
const x = varB;
const k = varC;
varA = x;
varB = k;
varC = y;
console.log(varA, varB, varC);

// outra forma de declarar um valor atribuir para outra variável.
let varUM = 'A';
let varDOIS = 'B';
let varTRES = 'C';
const temp = 'A';
varUM = varDOIS;
varDOIS = varTRES;
varTRES = temp;
console.log(varUM, varDOIS, varTRES);

//Outra forma de declara a variável atribuindo ela tudo entre parentes
let A = 'A';
let B = 'B';
let C = 'C';
[A, B, C] = [B, C, A];
console.log(A, B, C);