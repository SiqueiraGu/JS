//funções executa ações
function saudacao(nome) {
    
    console.log('Bom dia'); //tudo que esta na função pertence a função    
    
}
saudacao('Molly');
saudacao('Arielly');
saudacao('Gustavo'); //você pode neviar dados

function saudacaos(frase) {
    return `Bom dia ${frase}!`;
}
const variavel = saudacaos('Gustavo e Arielly');
console.log(variavel);

function soma(a, b) {
    const resultado = a + b;
    return resultado;
}
const resultado = soma(2, 2);
console.log(resultado);

const raiz = function (n) {
return n ** 0.5;
}; //Nesse caso quando você utilizar o sinal de atribuição (=) você precisa termina a expressão com ponto e virgula
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

const raiz2 = n1 => n1 ** 0.5; //Arrow function expressions =>
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
// Ela pode ser executada do mesmo jeito, só que simplificada