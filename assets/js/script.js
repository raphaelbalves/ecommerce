let linha = document.querySelector(".row")
let slide1 = document.querySelector("#slide1")
let slide2 = document.querySelector("#slide2")
let slide3 = document.querySelector("#slide3")

function listarProdutos() {
    for (let x = 1; x <= 9; x++) {
        
        linha.innerHTML +=`
                <div class="col">
                    <div class="card" style="width: 16.8rem; margin-bottom: 20px;">
                    <img src="./assets/img/produto/produto_${x}.webp" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Produto</h5>
                        <p class="card-text">xxxx</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                    </div>
                </div>
        `
    }
}

function carrosselProdutos() {
    for (let x = 1; x <= 9; x++) {
        if (x <= 3) {
            slide1.innerHTML +=`
                    <div class="col">
                        <div class="card" style="width: 16.8rem; margin-bottom: 20px;">
                        <img src="./assets/img/produto/produto_${x}.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Produto</h5>
                            <p class="card-text">xxxx</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                        </div>
                    </div>
            `
        }

        else if (x >= 4 && x <= 6) {
            slide2.innerHTML +=`
                    <div class="col">
                        <div class="card" style="width: 16.8rem; margin-bottom: 20px;">
                        <img src="./assets/img/produto/produto_${x}.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Produto</h5>
                            <p class="card-text">xxxx</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                        </div>
                    </div>
            `
        } else {
            slide3.innerHTML +=`
                    <div class="col">
                        <div class="card" style="width: 16.8rem; margin-bottom: 20px;">
                        <img src="./assets/img/produto/produto_${x}.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Produto</h5>
                            <p class="card-text">xxxx</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                        </div>
                    </div>
            `
        }
    }
}