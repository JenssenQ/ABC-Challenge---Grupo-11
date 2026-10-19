
const cards = document.querySelectorAll(".card");
const botones = document.querySelectorAll(".botones button");

function filtrar(tipo) {
    console.log("Se cambió a " + tipo);

    for (const card of cards) {
        if (tipo === "consonante" || card.dataset.tipo === tipo) {
            card.classList.remove("oculta");
        } else {
            card.classList.add("oculta");
        }
    }
}

botones.forEach(function (e) {
    e.addEventListener("click", function () {
        filtrar(e.dataset.tipo);
    });
});

filtrar("consonante");