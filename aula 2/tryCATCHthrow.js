/*
Tratando e lançando erros(Try, Catch e Thrwow)
*/

try {
    console.log(naoExisto);
} catch (err) { //se o erro ocorrer cai no bloco de comando!
    console.log('NaoExisto não existe');
    console.log(err);
}


function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser números.')
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    console.log(error);
}

function soma1(a, b) {
    if (
        typeof a !== 'number' ||
        typeof b !== 'number'
    ) {
        throw new ReferenceError('a e b precisam ser numeros.');
    }
    return a + b;
}
try {
    console.log(soma1(2, 3));
    console.log(soma1('2', 3));
} catch (error) {
    console.log(`Alguma coisa mais amigável para o usuário`);
}

try {
    console.log(a);
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    // É executada quando não há erros
} catch (e) {
    console.log('Tratando o erro');
    // É executada quando há erros
} finally {
    console.log('FINALLY: Eu sempre sou executado');
    // Sempre
}
console.log("#############");
//Outra forma de entende o executar do erro

try {
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

try {
    console.log(b);
} catch(e) {
    console.log('Deu erro');
} finally {
    console.log('Também sou finally');
}

} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('Finally: Eu sempresou executado');
}
console.log('#########')
//Outra forma

function retornaHora(data) {
    if (!(data instanceof Date)) {
        console.log('Não é');
    }
}

retornaHora();
//retornaHora(new Data(); <- INSTANCIA

function retonaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retonaHora();
    console.log(hora);
} catch(e) {
    //Tratar erro {}
    //console.log(e);
} finally {
    console.log('Tenha um bom dia');
}