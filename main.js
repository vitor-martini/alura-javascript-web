"use strict"

function tocarSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento == null)
        console.log("Elemento não encontrado.");
    else if(elemento.localName != "audio")
        console.log("Elemento inválido.");
    else
        elemento.play();            
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(let i = 0; i < listaDeTeclas.length; i++){      
    const tecla = listaDeTeclas[i];
    const teclaSom = tecla.classList[1];
    const seletorAudio = `#som_${teclaSom}`;

    listaDeTeclas[i].onclick = function() {        
        tocarSom(seletorAudio);
    }

    tecla.onkeydown = function(evento) {
        if(evento.code === "Space" || evento.code === "Enter")
            tecla.classList.add(`ativa`);
    }

    tecla.onkeyup = function(){
        tecla.classList.remove(`ativa`);            
    }
}
