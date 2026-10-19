/*REQUERIMIENTO 5: FILTRAR POR BOTONES */

/* Seleccionamos todas las tarjetas */
const cards = document.querySelectorAll(".card");

/* Seleccionamos los botones de filtro */
const botones = document.querySelectorAll(".botones button");

/* Funcion para filtrar las tarjetas segun el tipo */
function filtrar(tipo) {

    /* Mostramos en consola el filtro seleccionado solo prueba*/
    /* console.log("Se cambió a " + tipo); */

    /* Recorremos todas las tarjetas */
    for (const card of cards) {

        /* Si el filtro es todas o coincide con el tipo de tarjeta */
        if (tipo === "todas" || card.dataset.tipo === tipo) {

            /* Mostramos la tarjeta */
            card.classList.remove("oculta");

        } else {

            /* Ocultamos la tarjeta */
            card.classList.add("oculta");
        }
    }
}

/* Recorremos los botones */
botones.forEach(function (e) {

    /* Detectamos cuando se hace clic en un boton */
    e.addEventListener("click", function () {

        /* Enviamos el tipo de filtro seleccionado */
        filtrar(e.dataset.tipo);
    });
});

/* Mostramos todas las tarjetas al iniciar la pagina*/
filtrar("todas");

//Funcion Voltear
const contadorElemento = document.querySelector("#contador");
let letrasVistas = 0;
function voltear(card) {
    card.classList.toggle("volteada");
    if (!card.classList.contains("vista")) {
        card.classList.add("vista"); 
        letrasVistas++;
        contadorElemento.textContent = letrasVistas; 
    }
}
cards.forEach(card => {
    card.addEventListener("click", () => {
        voltear(card);
    });
});
