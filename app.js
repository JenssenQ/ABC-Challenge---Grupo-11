



//Funcion Voltear
const contadorElemento = document.querySelector("#contador");
const cards = document.querySelectorAll(".card");
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