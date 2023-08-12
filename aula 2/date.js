/*
Qualquer dúvida sobre date, acessar o link:
developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

// new é uma funcção construtora
const data = new Date(0); 
//Caso você coloque o valor zero
//Ele ira pegar a data 01/01/1970 Timestamp unix ou época unix
//Soma para chegar na data GMT-300(+ 3 HORAS) + Dec/31/1969
console.log(data.toString());

// 60 = Séria os minutos * 3 que é a hora do GMT, só que em JS e milesegundos, ai você faz vezes 1000
const tresHoras = 60 * 60 * 3 * 1000;
const dataAntes = new Date(0 + tresHoras);
console.log(dataAntes.toString());

//Adicionando um dia
const tresHoras1 = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const dataAntes1 = new Date(0 + tresHoras1 + umDia);
console.log(dataAntes1.toString());

//NÃO EXISTE 1000 MILESEGUNDOS
//NÃO EXISTES 60 SEGUNDOS 
const data2 = new Date(2019, 3, 20, 15, 14, 27, 999); //A, m, d, h, m, s, ms
console.log(data2.toString());

const data3 = new Date('2019-04-20 20:20:59');
console.log(data3.toString());

const data4 = new Date('2019-04-20 20:20:59');
console.log('Dia', data4.getDate());
console.log('Ano', data4.getFullYear());
console.log('Mês', data4.getMonth() + 1); //Mês começa do zero
console.log('Hora', data4.getHours());
console.log('Min', data4.getMinutes());
console.log('Seg', data4.getSeconds());
console.log('ms', data4.getMilliseconds());
console.log('Dia semana', data4.getDay()); //0 - Doming, 6 - Sábado
console.log(data4.toString());
//console.log(Date.now(data4)); ele pega o valor da sua consta data

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data5 = new Date();
const dataBrasil = formataData(data5);
console.log(dataBrasil);