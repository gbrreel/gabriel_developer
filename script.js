//   Seleciona os 2 botões Projects e Skills
  const spans = [...document.getElementsByClassName("btn_projects_skills")];
//   Seleciona o background que ficará marcando o botão selecionado
  const btn_back = document.getElementById("btn_back");

//   Realiza um loop nos dois botões selecionados afim de saber em qual houve o click
  spans.forEach(span => {
    // Escuta o evento click
      span.addEventListener("click", function (event) {
        // Event.target.id pega o id do selecionado (O id está no html)
          const clickedSpan = event.target.id;

          // Se o id for igual ao botão skills então add a classe com animação que faz ele se mover para direita
          if (clickedSpan === 'skills_id') {
              btn_back.classList.add("hide");
          } else {
            // Caso contrário remove isso fará ela voltar a posição original
              btn_back.classList.remove("hide");
          }
      });
  });

        // Obtém referências para os botões e conteúdos
var projects_id = document.getElementById("projects_id");
var skills_id = document.getElementById("skills_id");
var conteudo1 = document.getElementById("container-5");
var conteudo2 = document.getElementById("container-6");

// Adiciona eventos de clique aos botões
projects_id.addEventListener("click", function() {
    conteudo1.style.display = "flex"; // Exibe o conteúdo do botão 1
    conteudo2.style.display = "none"; // Esconde o conteúdo do botão 2
});

skills_id.addEventListener("click", function() {
    conteudo1.style.display = "none"; // Esconde o conteúdo do botão 1
    conteudo2.style.display = "flex"; // Exibe o conteúdo do botão 2
});



