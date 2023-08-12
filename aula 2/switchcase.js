/*
Switch
Case
Break
Default
*/

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    //Vai executar o bloco de comando até ser o dia exato
    switch (diaSemana) { //essa variável vai receber o número do dia da semana
        case 0:
            diaSemanaTexto = 'Domingo'; // Essa variável vai receber a string
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;    
    }
}
const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);