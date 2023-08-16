//Escreva uma função que recebe 2 números e retorne o maior deles.


//Um modo de fazer, mas você não ira escrever o número
const PrimeiroNumero = 10;
const SegundoNumero = 40;

if (PrimeiroNumero > SegundoNumero) {
    console.log(PrimeiroNumero);
}
else {
    console.log(SegundoNumero);
}


//Outras formas 
function max (x, y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}

console.log(max(1, 2));