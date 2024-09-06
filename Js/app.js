function pesquisar() {
  
  let section = document.getElementById("resultados-pesquisa");

let resultados = "" 

for(let dado of dados) {
    resultados += `
                <div class="item-resultado">
                  <h2><a href=${dado.link} target="_blank">${dado.nome}</a></h2>

                  <ul class="redes-sociais">
    <li>
        <a href="#" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>
    </li>
    <li>
        <a href="#" target="_blank">
            <i class="fab fa-facebook"></i>
        </a>
    </li>
    <li>
        <a href="#" target="_blank">
            <i class="fab fa-tiktok"></i>
        </a>
    </li>
</ul>
                   <p class="descricao-meta">${dado.descricao}</p>
                      <a href=${dado.link} target="_blank">Mais Informações.</a>
                      
                </div>
`}

section.innerHTML = resultados

}

