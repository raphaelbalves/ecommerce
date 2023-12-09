let corpo = document.getElementById("corpo")
let apagar_luz = document.getElementById("apagar-luz")

apagar_luz.addEventListener("click", interruptor)



function carregarDarkMode(){
    let status = localStorage.getItem("darkMode")
    if (status === "ativado") {
        corpo.classList.add("dark_mode") 
    } else {
        corpo.classList.remove("dark_mode") 
    }
}

function interruptor(){
    let status = localStorage.getItem("darkMode")

    if (status === "ativado") {
        corpo.classList.remove("dark_mode") 
        localStorage.setItem("darkMode", "desativado")
    } else {
        corpo.classList.add("dark_mode") 
        localStorage.setItem("darkMode", "ativado")   
    }
}

