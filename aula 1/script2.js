const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Seu número é: <strong>${numero}</ strong><br /></p>`;         
texto.innerHTML += `<p>Raiz quadrada: <strong>${Math.sqrt(numero)}</ strong><br /></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</ strong><br /></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</ strong><br /></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</ strong><br /></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.min(numero)}</ strong><br /></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</ strong><br /></p>`;