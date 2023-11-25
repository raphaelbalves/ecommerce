let linha = document.querySelector(".row")
let slide1 = document.querySelector("#slide1")
let slide2 = document.querySelector("#slide2")
let slide3 = document.querySelector("#slide3")

const listaDeBilas = [
    {
        nome: "Bila 1",
        descricao: "Da boa mesmo",
        preco: "R$ 10,00",
        imagem: "assets/img/produto/produto_1.webp"
    },

    {
        nome: "Bila 2",
        descricao: "Bila show",
        preco: "R$ 100,00",
        imagem: "./assets/img/produto/produto_2.webp"
    },

    {
        nome: "Bila 3",
        descricao: "Bila beleza",
        preco: "R$ 5,00",
        imagem: "./assets/img/produto/produto_3.webp"
    },

    {
        nome: "Bila 4",
        descricao: "Bila firmeza",
        preco: "R$ 4,00",
        imagem: "./assets/img/produto/produto_4.webp"
    },

    {
        nome: "Bila 5",
        descricao: "Bilaaaaaaaa",
        preco: "R$ 3,00",
        imagem: "./assets/img/produto/produto_5.webp"
    },

    {
        nome: "Bila 6",
        descricao: "Bilona",
        preco: "R$ 2,00",
        imagem: "./assets/img/produto/produto_6.webp"
    },

    {
        nome: "Bila 7",
        descricao: "Bilita",
        preco: "R$ 1,00",
        imagem: "./assets/img/produto/produto_7.webp"
    },

    {
        nome: "Bila 8",
        descricao: "Que shoowwwwww",
        preco: "R$ 55,00",
        imagem: "./assets/img/produto/produto_8.webp"
    },

    {
        nome: "Bila 9",
        descricao: "Eita que bila",
        preco: "R$ 44,00",
        imagem: "./assets/img/produto/produto_9.webp"
    }
]

function listarProdutos() {
    for (let x = 0; x <= 8; x++) {
        
        linha.innerHTML +=`
                <div class="col">
                    <div class="card" style="width: 16.8rem; margin-bottom: 20px;">
                    <img src="${listaDeBilas[x].imagem}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${listaDeBilas[x].nome}</h5>
                        <p class="card-text">${listaDeBilas[x].descricao}</p>
                        <p class="card-text">${listaDeBilas[x].preco}</p>
                        <a href="./comprar.html" class="btn btn-primary">Comprar</a>
                    </div>
                    </div>
                </div>
        `
    }
}

function carrosselProdutos() {
    for (let x = 0; x <= 8; x++) {
        if (x <= 2) {
            slide1.innerHTML +=`
            <div class="col">
                <div class="card" style="width: 16.8rem; margin-bottom: 20px;">
                <img src="${listaDeBilas[x].imagem}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${listaDeBilas[x].nome}</h5>
                    <p class="card-text">${listaDeBilas[x].descricao}</p>
                    <p class="card-text">${listaDeBilas[x].preco}</p>
                    <a href="./comprar.html" class="btn btn-primary">Comprar</a>
                </div>
                </div>
        </div>
            `
        }

        else if (x >= 3 && x <= 5) {
            slide2.innerHTML +=`
            <div class="col">
                <div class="card" style="width: 16.8rem; margin-bottom: 20px;">
                <img src="${listaDeBilas[x].imagem}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${listaDeBilas[x].nome}</h5>
                    <p class="card-text">${listaDeBilas[x].descricao}</p>
                    <p class="card-text">${listaDeBilas[x].preco}</p>
                    <a href="./comprar.html" class="btn btn-primary">Comprar</a>
            </div>
            </div>
    </div>
            `
        } else {
            slide3.innerHTML +=`
            <div class="col">
            <div class="card" style="width: 16.8rem; margin-bottom: 20px;">
            <img src="${listaDeBilas[x].imagem}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${listaDeBilas[x].nome}</h5>
                <p class="card-text">${listaDeBilas[x].descricao}</p>
                <p class="card-text">${listaDeBilas[x].preco}</p>
                <a href="./comprar.html" class="btn btn-primary">Comprar</a>
        </div>
        </div>
</div>
            `
        }
    }
}


let data = document.querySelector("#validade")
data.addEventListener("focusout", () => console.log(data.value))