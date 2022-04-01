
var url = "http://localhost:3333/pacotes";

function getListaPacotes() {
  const destino = document.getElementById("destino").value
  const agencia = document.getElementById("agencia").value
  const dataPartida = document.getElementById("dataPartida").value

  fetch(url + `?destino=${destino}&agencia=${agencia}&dataPartida=${dataPartida}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => myFunction(data))
}

getListaPacotes()

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
      out += '<li class="pacote">' + 
                '<div class="pacote-image" style="background-image: url(' + arr[i].fotos[0].url + ')"></div>' +
                '<div class="pacote-content">' +
                  '<div class="pacote-dados">' +
                    '<strong>'+ arr[i].destino.cidade +'</strong>' +
                    '<div>' +
                      '<p>Data</p>' +
                      '<p>' + new Date(arr[i].dataPartida).toLocaleDateString('pt-BR') + '</p>' +
                    '</div>' +
                  '</div>' +
                  '<div class="pacote-compra">' +
                    '<strong>R$ ' + arr[i].valor + '</strong>' +
                    '<a href="pacote.html?id=' + arr[i].id +'">Comprar</a>' +
                  '</div>' +
                '</div>' +
              '</li>';
  }
  document.getElementById("lista-pacotes").innerHTML = out;
}
