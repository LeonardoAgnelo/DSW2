const conta = localStorage.getItem('excellentVoyage.session')

const navbarRightSide = document.getElementById('navbar-right-side')

if (conta) {
  const usuario = JSON.parse(conta).usuario

  navbarRightSide.innerHTML = '<li>' +
    '<a href="perfilAdmin.html" class="botao-logado">' +
        '<img src="../image/icons/person-circle.svg"/><p>' + usuario.nome + '</p>' +
    '</a>' +
  '</li>' +
  '<li>' +
    '<a onclick="sair()" class="botao-logado">' +
        '<img src="../image/icons/exit.svg"/> <p>Sair</p>' +
    '</a>' +
  '</li>';
} else {
  navbarRightSide.innerHTML = '<li><a href="login.html" class="botao-login">Login</a></li>' + 
    '<li><a href="cadastro.html" class="botao-cadastro">Cadastre-se</a></li>';
}

function sair() {
  localStorage.removeItem('excellentVoyage.session')

  window.location.reload('/src/pages')
}