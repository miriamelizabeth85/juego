/**definicion de variables y constantes */
let scoreUsuar = 0;
let scoreCompu = 0;
const scoreUsuar_span = document.getElementById("score-usuar");
const scoreCompu_span = document.getElementById("score-compu");
const barraScore_div = document.querySelector(".barra-score");
const resultado_p = document.querySelector(".resultado > p");
const piedra_div = document.getElementById("pi");
const papel_div = document.getElementById("pa");
const tijera_div = document.getElementById("ti");

/**eleccion de la computadora */
function getCompuEleccion() {
    const elecciones = ['pi', 'pa', 'ti'];
    const numeroRandom = Math.floor(Math.random() * 3);/**eleccion con ramdon multiplicado 3 y redondeo con floor */
    return elecciones [numeroRandom];
}

/**convertir eleccion en palabra */
function palabras(letras) {
    if (letras === "pi") return "Piedra";
    if (letras === "pa") return "Papel";
    return "Tijera";
}

/**funcion para si gana el usuario */
function ganar(eleccionUsu, eleccionCompu) {
    /**coloca usuar compu en chiquito al lado de la eleccion */
    const pequeUsuar = "usuar".fontsize(3).sub();
    const pequeCompu = "compu".fontsize(3).sub();
    /**busca la eleccion del usuario en el html */
    const eleccionUsuar_div = document.getElementById(eleccionUsu);
    /**suma al contador */
    scoreUsuar++;
    /**escribe el contador y las elecciones */
    scoreUsuar_span.innerHTML = scoreUsuar;
    scoreCompu_span.innerHTML = scoreCompu;
    resultado_p.innerHTML = `${palabras(eleccionUsu)}${pequeUsuar} gana a ${palabras(eleccionCompu)}${pequeCompu}. Ganaste!`;
    /**coloca brillo verde si gana */
    eleccionUsuar_div.classList.add('brillo-verde');
    setTimeout(function() { eleccionUsuar_div.classList.remove('brillo-verde') }, 500);
}
/**funcion para si pierde el usuario */
function perder(eleccionUsu, eleccionCompu) {
    /**coloca usuar compu en chiquito al lado de la eleccion */
    const pequeUsuar = "usuar".fontsize(3).sub();
    const pequeCompu = "compu".fontsize(3).sub();
    /**busca la eleccion del usuario en el html */
    const eleccionUsuar_div = document.getElementById(eleccionUsu);
    /**suma al contador */
    scoreCompu++;
    /**escribe el contador y las elecciones */
    scoreUsuar_span.innerHTML = scoreUsuar;
    scoreCompu_span.innerHTML = scoreCompu;
    resultado_p.innerHTML = `${palabras(eleccionUsu)}${pequeUsuar} gana a ${palabras(eleccionCompu)}${pequeCompu}. Perdiste!`;
    /**coloca brillo rojo si pierde */
    eleccionUsuar_div.classList.add('brillo-rojo');
    setTimeout(function() { eleccionUsuar_div.classList.remove('brillo-rojo') }, 500);
}

/**funcion para si empatan */
function empatar(eleccionUsu, eleccionCompu) {
    /**coloca usuar compu en chiquito al lado de la eleccion */
    const pequeUsuar = "usuar".fontsize(3).sub();
    const pequeCompu = "compu".fontsize(3).sub();
    /**busca la eleccion del usuario en el html */
    const eleccionUsuar_div = document.getElementById(eleccionUsu);
    /**escribe las elecciones */
    resultado_p.innerHTML = `${palabras(eleccionUsu)}${pequeUsuar} gana a ${palabras(eleccionCompu)}${pequeCompu}. EMPATE!`;
    /**coloca brillo gris si empatan */
    eleccionUsuar_div.classList.add('brillo-gris');
    setTimeout(function() { eleccionUsuar_div.classList.remove('brillo-gris') }, 500);
}

/**funcion para la combinacion de elecciones */
function juego(eleccionUsu) {
    const eleccionCompu = getCompuEleccion();
    switch(eleccionUsu + eleccionCompu) {
        case "piti":
        case "papi":
        case "tipa":
            ganar(eleccionUsu, eleccionCompu);
            break;
        case "pipa":
        case "pati":
        case "tipi":
            perder(eleccionUsu, eleccionCompu);
            break;
        case "pipi":
        case "papa":
        case "titi":
            empatar(eleccionUsu, eleccionCompu);
            break;
    }
}

/**funcion para la eleccion */
function menu() {
    piedra_div.addEventListener('click', function() {
        juego("pi");
    })
    papel_div.addEventListener('click', function() {
        juego("pa");
    })
    tijera_div.addEventListener('click', function() {
        juego("ti");
    })
}

menu();