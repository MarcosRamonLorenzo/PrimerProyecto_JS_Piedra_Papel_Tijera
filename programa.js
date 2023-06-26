var piedra = document.getElementById('piedra');
var papel =document.getElementById('papel');
var tijera = document.getElementById('tijera');
var resultado = document.getElementById('empate');
var versus = document.getElementById('versus');
var resultado1 = document.getElementsByClassName('resultado1');
var resultado2 = document.getElementsByClassName('resultado2');
var numAleatorio = generarNumAleatorio(1,3);
var btnReiniciar = document.getElementById('btnReiniciar');


function generarNumAleatorio(min,max) {

    return Math.floor(Math.random()*(max-min+1)+min);
}

function getFotoResultado(numeroRandm) {
    if (numeroRandm==1){
        resultado2[0].src = piedra.src;
    }
    else if (numeroRandm==2) {
        resultado2[0].src = papel.src;
    }
    else {
        resultado2[0].src = tijera.src;
    }

}



piedra.addEventListener('click',function (){

        versus.style.display='block';

        resultado1[0].src = piedra.src;

        getFotoResultado(numAleatorio);
        if (numAleatorio==1){
            resultado.textContent='EMPATE';
            resultado.style.backgroundColor='#C9D0BD';
        }
        else if (numAleatorio==2){
            resultado.textContent='DERROTA';
            resultado.style.backgroundColor='#FF5936';
        }
        else{
            resultado.textContent='VICTORIA';
            resultado.style.backgroundColor='#D0FF84';
        }




});

papel.addEventListener('click',function (){

    versus.style.display='block';

    resultado1[0].src = papel.src;

    getFotoResultado(numAleatorio);
    if (numAleatorio==2){
        resultado.textContent='EMPATE';
        resultado.style.backgroundColor='#C9D0BD';
    }
    else if (numAleatorio==3){
        resultado.textContent='DERROTA';
        resultado.style.backgroundColor='#FF5936';
    }
    else{
        resultado.textContent='VICTORIA';
        resultado.style.backgroundColor='#D0FF84';
    }

});


tijera.addEventListener('click',function (){

    versus.style.display='block';

    resultado1[0].src = tijera.src;

    getFotoResultado(numAleatorio);
    if (numAleatorio==3){
        resultado.textContent='EMPATE';
        resultado.style.backgroundColor='#C9D0BD';
    }
    else if (numAleatorio==1){
        resultado.textContent='DERROTA';
        resultado.style.backgroundColor='#FF5936';
    }
    else{
        resultado.textContent='VICTORIA';
        resultado.style.backgroundColor='#D0FF84';
    }



});


btnReiniciar.addEventListener('click', function() {
    location.reload();
});