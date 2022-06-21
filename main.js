const resultado = document.getElementById("bdvN");
const container = document.querySelector(".container-fluid");
const barraDeVida1 = document.getElementById("bdv")

let barraDeVida = 100;


container.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("btn-danger")) {
        barraDeVida--;

        restarVida();
        changeStyle()
    }
    

    e.stopPropagation();
})

function restarVida() {
    resultado.textContent = barraDeVida;
}


function changeStyle(){
    const element = document.getElementById("bdv");
    element.style.width = "90%";
    if (barraDeVida <= 89) {
        element.style.width = "80%"
    }
    if (barraDeVida <= 79) {
        element.style.width = "70%"
    }
    if (barraDeVida <= 69) {
        element.style.width = "60%"
    }
    if (barraDeVida <= 59) {
        element.style.width = "50%"
    }
    if (barraDeVida <= 49) {
        element.style.width = "40%"
    }
    if (barraDeVida <= 39) {
        element.style.width = "30%"
    }
    if (barraDeVida <= 29) {
        element.style.width = "20%"
    }
    if (barraDeVida <= 19) {
        element.style.width = "10%"
    }
    if (barraDeVida <= 10) {
        element.style.width = "10%"
    }
    if (barraDeVida <= 9) {
        element.style.width = "9%"
    }
    if (barraDeVida <= 8) {
        element.style.width = "8%"
    }
    if (barraDeVida <= 7) {
        element.style.width = "7%"
    }
    if (barraDeVida <= 6) {
        element.style.width = "6%"
    }
    if (barraDeVida <= 5) {
        element.style.width = "5%"
    }
    if (barraDeVida <= 4) {
        element.style.width = "4%"
    }
    if (barraDeVida <= 3) {
        element.style.width = "3%"
    }
    if (barraDeVida <= 2) {
        element.style.width = "2%"
    }
    if (barraDeVida <= 1) {
        element.style.width = "1%"
    }
    if (barraDeVida <= 0) {
        element.style.width = "0%"
    }

}




