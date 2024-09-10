function pesquisar () {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhuma informação adicionada. Digite o nome do prato que deseja encontrar</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let prato of pratos) {
        titulo = prato.titulo.toLowerCase();
        descricao = prato.descricao.toLowerCase();
        tags = prato.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            console.log(prato.titulo.includes(campoPesquisa));

            resultados += `
            <div class="item-resultado">
                <img src="${prato.imagem}" alt="${prato.descricaoImagem}">
                <h2>${prato.titulo}</h2>
                <p class="descricao-meta">${prato.descricao}</p>
                <a href=${prato.link} target="_blank">Receita</a>
            </div>
            `;
        }       
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado. Não temos essa informação</p>"
    }

    section.innerHTML = resultados;
}

