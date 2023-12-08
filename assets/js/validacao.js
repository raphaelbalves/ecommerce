//Validar número do cartão
let validaNumero = document.getElementById("num-cartao")
validaNumero.addEventListener("blur", () => {
    const padraoNumero = /^[0-9]{16}$/
    if (!padraoNumero.test(validaNumero.value)) {
        validaNumero.value=""
        validaNumero.setAttribute("placeholder", "Inserir número válio de 16 dígitos")
    }

})

//Validar titular
let validaTitular = document.getElementById("titular")
validaTitular.addEventListener("blur", () => {
    const padraoNome = /^\D+\s/
    if (!padraoNome.test(validaTitular.value)) {
        validaTitular.value=""
        validaTitular.setAttribute("placeholder", "Inserir nome e sobrenome")
    }

})


//Validar CVV
let validaCVV = document.getElementById("cvv")
validaCVV.addEventListener("blur", () => {
    const padraoCVV = /^[0-9]{3}$/
    if (!padraoCVV.test(validaCVV.value)) {
        validaCVV.value=""
        validaCVV.setAttribute("placeholder", "Inserir número válio de 3 dígitos")
    }
})

//Validar número do CPF
let validaCPF = document.getElementById("cpf")
validaCPF.addEventListener("blur", () => {
    const padraoCPF = /^[0-9]{11}$/
    if (!padraoCPF.test(validaCPF.value)) {
        validaCPF.value=""
        validaCPF.setAttribute("placeholder", "Inserir número válio de 11 dígitos")
    }
})