        //selecionando os elementos para serem alterados
        let title = document.getElementById("title");
        let botao = document.getElementById("botao");
        let descricao = document.querySelector(".descricao");

        //evento que acontece apos o clique do botao
        botao.addEventListener("click", function() {
            title.innerHTML = "Foi malipulado com o DOM";

            descricao.style.color = "red";
            descricao.style.fontSize = "2em";

            descricao.innerHTML = "O conteudo tambem foi alterado";

            title.classList.toggle("highlight");
        });