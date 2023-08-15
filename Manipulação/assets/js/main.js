//Para selecionar o elemento da div
const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelector('p');

const estilosBody = getComputedStyle(document.body);
const backgroudColoBody = estilosBody.backgroundColor;

for (let p of ps) {
    // Background-color não pode ter.
    // Só pode Camenase
    p.style.backgroudColo = backgroudColoBody;
    p.style.color = '#FFFFFF';    
}
