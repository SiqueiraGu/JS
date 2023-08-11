/*
IF -> Se
Else -> Senão
else if -> senão se
*/

//IF (SE)
const horario = 10;
/*Se a horarioe séria 10 for menor a 12 ele vai falar bom dia, caso ele for maior que 12 horariole vai
ser false e não ira entra no bloco de comando
*/
if (horario <= 12){
    console.log('Good Morning');
}

//ELSE (SENAO)
const hora = 15;
/*Variavel e 15, se a horarior menor ou igual a 14 ela ira executar o bloco de comando if
como ela e 15 ela ira executar o bloco de comando else(senao)
*/
if (hora <= 14) {
    console.log('Good Afternoon')
}
else {
    console.log('Good Night')
}

//ELSE IF(SENAO SE)
const horarios = 16;
/*
Variavel e 16 se a horarior igual menor que 12 então ira executar o IF, caso a horarior igual menor a 13 e menor igual a 17
então ira executar o bloco de comando else if, mas senão ira executar o último bloco de comando
*/
if (horarios <= 12) {
    console.log('Good Morning');
}
else if (horarios >= 13 && horarios <= 17) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');
}
//PODEMOS ULTILIZAR CONDIÇÃO SEM TER QUE USAR ELSE IF
//PODEMOS UTILIZAR SÓ O IF
//NÃO PRECISA FECHAR OS BLOCOS, MAS AS EXECUÇÕES DELES PRECISA SER FECHADO