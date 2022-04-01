const conta = localStorage.getItem('excellentVoyage.session')

if (!conta || JSON.parse(conta).usuario.tipo != 'cliente') {
    window.location.replace('/src/pages')
}

var url = "http://localhost:3333/cliente/" + JSON.parse(conta).usuario.id + "/pacotes"
fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(conta).token
    },
    method: 'GET',
  }).then(response => response.json()).then(data => myFunction(data))

function myFunction(arr){
    let txtInicio =
        '<h1>Olá' + JSON.parse(conta).usuario.nome + ',</h1>'+
        '<p>lembre das suas viagens</p>';

    document.getElementById("texto-inicio").innerHTML = txtInicio;

    let out = "";
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
};