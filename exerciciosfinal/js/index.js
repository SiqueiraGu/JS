//IIE
function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
   function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    
    pessoas.push({
        nome: nome.Value,
        sobrenome: sobrenome.Value,
        peso: peso.Value,
        altura: altura.Value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;    
   }
   form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

/*form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado.');
        Aqui é uma forma de fazer o button ser enviado.
    };*/
    /*let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm);
    Outra forma de fazer 
    */