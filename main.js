const resultado = document.getElementById("bdvN");
const barraDeVida1 = document.getElementById("bdv").style.width // !!!!
const container = document.querySelector(".container-fluid");

let barraDeVida = 100;
let barraDeVida2 = 340; // !!!!

container.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("btn-danger")) {
        barraDeVida--;
        barraDeVida2--;
        restarVida();
        restarBarraDeVida(); // !!!!
    }
    

    e.stopPropagation();
})

function restarVida() {
    resultado.textContent = barraDeVida;
}

function restarBarraDeVida() {
    barraDeVida1.textContent = barraDeVida2; /// !!!!
}


