

/* quando determininado botão(id) for clicado uma específica função será acionada*/

document.getElementById('botao_d4').onclick = dado_d4;
document.getElementById('botao_d6').onclick = dado_d6;
document.getElementById('botao_d8').onclick = dado_d8;
document.getElementById('botao_d10').onclick = dado_d10;
document.getElementById('botao_d12').onclick = dado_d12;
document.getElementById('botao_d20').onclick = dado_d20;

/* função que faz a aleatoriedade dos dados */
function aleatorio(lista){
    let numero = Math.floor(Math.random(lista) * lista.length);

    return lista[numero];

}

/*funções de cada tipo de dado*/
function dado_d4(){
    const lista = [1,2,3,4];
    resultado = aleatorio(lista);
    /*irá fazer aparecer na tela o resultado */
    /*ele se relaciona com o "label" criado no html*/
    document.getElementById('resultado').innerText = resultado;

}

function dado_d6(){
    const lista = [1,2,3,4,5,6];
    resultado = aleatorio(lista);
    document.getElementById('resultado').innerText = resultado;

}

function dado_d8(){
    const lista = [01,02,03,04,05,06,07,08];
    resultado = aleatorio(lista);
    document.getElementById('resultado').innerText = resultado;

}

function dado_d10(){
    const lista = [1,2,3,4,5,6,7,8,9,10];
    resultado = aleatorio(lista);
    document.getElementById('resultado').innerText = resultado;

}

function dado_d12(){
    const lista = [1,2,3,4,5,6,7,8,9,10,11,12];
    resultado = aleatorio(lista);
    document.getElementById('resultado').innerText = resultado;

}

function dado_d20(){
    const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    resultado = aleatorio(lista);
    document.getElementById('resultado').innerText = resultado;

}



