/*
Document Object Model (DOM)
*/

const container = document.querySelector('.container');
const div = document.createElement('div'); //Cria um elemento (DIV e esta salva no variável DIV)


//Elas ainda não e filha de ninguém
let tagCriada = document.createElement(tag);
let textoCriado = document.createTextNode(texto);

//Ela só passa a ser filho quando
tagCriada.appendChild(textoCriado);
div.appendChild(tagCriada);


/*

Aqui séria a arvore do DOM
<section class="cibtauber">
<h1>Teste</h1>
<!--AQUI-->
<div>...</div>
[</section>

(Pode manipular o H1 na hora que quiser)
const h1 = 
container.querySelector('h1');

h1

<h1>teste</h1>

h1.style.backgroudColor = 'red';
*/

//Quando se fala DOM se refere a navegador, você se refere a uma interface de objeto que te permite a manipular
//A pagina