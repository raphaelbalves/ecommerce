//Validar número do cartão
let validaNumero = document.getElementById("num-cartao")
validaNumero.addEventListener("focusout", () => {
    const padraoNumero = /^[0-9]{16}$/
    if (!padraoNumero.test(validaNumero.value)) {
        validaNumero.value=""
        validaNumero.setAttribute("placeholder", "Inserir número válio de 16 dígitos")
    } else {
        validaNumero.value += " " + String.fromCodePoint(0x1F600)
    }

})

//Validar titular
let validaTitular = document.getElementById("titular")
validaTitular.addEventListener("focusout", () => {
    const padraoNome = /^\D+\s/
    if (!padraoNome.test(validaTitular.value)) {
        validaTitular.value=""
        validaTitular.setAttribute("placeholder", "Inserir nome e sobrenome")
    } else {
        validaTitular.value += " " + String.fromCodePoint(0x1F600)
    }

})


//Validar CVV
let validaCVV = document.getElementById("cvv")
validaCVV.addEventListener("focusout", () => {
    const padraoCVV = /^[0-9]{3}$/
    if (!padraoCVV.test(validaCVV.value)) {
        validaCVV.value=""
        validaCVV.setAttribute("placeholder", "Inserir número válio de 3 dígitos")
    } else {
        validaCVV.value += " " + String.fromCodePoint(0x1F600)
    }
})

//Validar número do CPF
let validaCPF = document.getElementById("cpf")
validaCPF.addEventListener("focusout", () => {
    const padraoCPF = /^[0-9]{11}$/
    if (!padraoCPF.test(validaCPF.value)) {
        validaCPF.value=""
        validaCPF.setAttribute("placeholder", "Inserir número válio de 11 dígitos")
    } else {
        validaCPF.value += " " + String.fromCodePoint(0x1F600)
    }
})



