/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
>= menor que
<= menor que ou igual a
== igualdade (valor) -> não recomendo usar
=== igualdade estrita (valor e tipo)
!= diferente (valor) -> não recomendo usar
!== diferente estrito (valor e tipo)
*/
const comp = 10 > 5; //Só e false caso o primeiro valor for menor do que o segundo valor
console.log (comp);

const comp1 = 10 >= 5; //Só e false quando o primeiro valor foi maior, caso ele for igual ainda vai ser verdadeiro
console.log(comp1);

const comp2 = 5 < 10; //Só e false quando o primeiro valor e maior que o segundo valor
console.log(comp2);

const comp3 = 5 <= 10; //Só e false quando o primeiro valor e maior que o segundo valor, caso ele for igual ainda e true
console.log(comp3);

const comp4 = 5 == 5; //Só e true quando os valores forem iguais
console.log(comp4); 

const comp5 = 5 === 5; //Só e true quando os valores forem iguais
console.log(comp5);

const comp6 = 6 != 5; //Vai ser true quando os valores forem diferentes, não importa se for maior ou menor, não pode ser igual
console.log(comp6);

const comp7 = 7 !== 5; //Vai ser true quando os valores forem diferentes, não importa se for maior ou menor, não pode ser igual
console.log(comp7);

/*As variáveis são diferentes um e valor e o outro e string.
Oq acontece aqui e uma correção de tipo, ele converte o tipo sem a gente manda, ele faz uma dedução
pode gerar algum efeito posterior ao seu código, você mesmo pode fazer a converção*/
const num1 = 10; //number
const num2 = '10'; //string
const comp8 = num1 == num2;
console.log(comp8);

//A mesma coisa acontece aqui, por esse motivo não e recomendado usar esses sinais!
const num3 = 10;
const num4 = '9';
const comp9 = num3 != num4;
console.log(comp9); 