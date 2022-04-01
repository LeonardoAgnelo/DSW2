const conta = localStorage.getItem('excellentVoyage.session')

if (!conta || JSON.parse(conta).usuario.tipo != 'agencia') {
    window.location.replace('/src/pages')
}

var url = "http://localhost:3333/pacotes?idAgencia=" + JSON.parse(conta).usuario.id
fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(conta).token
    },
    method: 'GET',
  }).then(response => response.json()).then(data => myFunction(data))



var btn = document.getElementById("botao-pacotesvigentes")
btn.onclick = evento

function evento(){
    let url = 'http://localhost:3333/pacotes?idAgencia=' + JSON.parse(conta).usuario.id + '&vigentes=1';
    fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(conta).token
        },
        method: 'GET',
    }).then(response => response.json()).then(data => myFunction(data))
}


function myFunction(arr) {
    var txtInicio =
        '<h1>Olá CVC,'+ JSON.parse(conta).usuario.nome +'</h1>'+
        '<p>Confira seus pacotes de viagens</p>';
    document.getElementById("texto-inicio").innerHTML = txtInicio;

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