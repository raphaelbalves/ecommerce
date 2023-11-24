let linha = document.querySelector(".row")

function listarProdutos() {
    for (let x = 1; x <= 12; x++) {
        
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