function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa inserido pelo usuário.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa); // Loga o termo de pesquisa no console para fins de depuração.
    
    // confere se o input foi preenchido
    if(campoPesquisa == ""){
        section.innerHTML = "<h2><b>Digite um Nome Válido.</b></h2>"
        return
    }
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";
  
    // Itera sobre os dados da pesquisa e constrói o HTML para cada resultado.
    for (let dado of dados) {

           if(dado.nome.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
            
            resultados += `
            <div class="item-resultado">
              <h2><a href=${dado.link} target="_blank">${dado.nome}</a></h2>
              <ul class="redes-sociais">
                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-tiktok"></i></a></li>
              </ul>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais Informações.</a>
            </div>
          `;

           }
   }

    // Atualiza o conteúdo da seção de resultados com os resultados formatados.
    section.innerHTML = resultados;
  }