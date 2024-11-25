function demonstrarSeletores() {
    let eletoPorId = document.getElementById("exemploid");
    eletoPorId.style.color = "red";

    let elementosPorClasse = document.querySelectorAll(".exemploclasse");
elementosPorClasse.forEach(elemento => {
    elemento.style.backgroundColor = "blue";
});

let elementosPorTag = document.querySelectorAll("p");
elementosPorTag.forEach(elemento => {
    elemento.style.fontWeight = "bold";
});

let elementosPorQuerry = document.querySelector(".paragrafo");
elementosPorQuerry.style.fontSize = "20px";

let elementosPorQuerryAll = document.querySelectorAll(".paragrafo");
elementosPorQuerryAll.forEach(elemento => {
    elemento.style.textDecoration = "underline";
});
}
