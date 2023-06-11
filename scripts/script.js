window.onload = function () {
   
    var botoes = document.getElementsByClassName("galeria__imagem__button");
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click",  atualizaImagem);
    }
} 

function atualizaImagem (e) {
    var principal = document.getElementById("galeria__principal");
    var url = e.target.getAttribute("src");
    principal.setAttribute("src", url);
}
  