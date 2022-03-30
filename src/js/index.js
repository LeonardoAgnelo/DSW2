var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8080/pacotes";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
      out += '<li class="pacote">' + 
                '<div class="pacote-image" style="background-image: url(' + url + '/' + arr[i].fotos[0].url + ')"></div>' +
                '<div class="pacote-content">' +
                  '<div class="pacote-dados">' +
                    '<strong>'+ arr[i].destinoCidade +'</strong>' +
                    '<div>' +
                      '<p>Data</p>' +
                      '<p>' + new Date(arr[i].dataPartida).toLocaleDateString('pt-BR') + '</p>' +
                    '</div>' +
                  '</div>' +
                  '<div class="pacote-compra">' +
                    '<strong>R$ ' + arr[i].valor + '</strong>' +
                    '<a href="pacote.html">Comprar</a>' +
                  '</div>' +
                '</div>' +
              '</li>';
  }
  document.getElementById("lista-pacotes").innerHTML = out;
}
