const conta = localStorage.getItem('excellentVoyage.session')

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};

const querystring =  window.location.search
const urlParam = new URLSearchParams(querystring);
const id =  urlParam.get('id')

var url = "http://localhost:3333/pacotes/"+ id;

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr){

    var fotos = ''
    for(foto of arr.fotos){
        fotos +=
          '<div class="foto">'+
              '<img src="' + foto.url +'">'+
          '</div>';
    }

    document.getElementById("lista-fotos").innerHTML = fotos;

    var headerContent = 
        '<div class="header-content">'+
            '<h1>'+arr.destino.cidade +'</h1>'+
            '<p>Viagem promovida por <strong>'+ arr.agencia.nome +'</strong></p>'+
            '<div class="valor-pacote">'+
                '<strong>Valor</strong>'+
                '<span class="pacote-preco">R$ ' + arr.valor+'</span>'+
            '</div>'+
        '</div>';
    document.getElementById("header-content").innerHTML = headerContent;

    var pacoteContent = 
        '<h2>Informações Adicionais</h2>'+
        '<div class="dados">'+
            '<div class="dados-gerais">'+
               '<div class="dado">'+
                    '<strong>País</strong>'+
                    '<p>'+arr.destino.pais+'</p>'+
                '</div>'+
                '<div class="dado">'+
                    '<strong>Estado</strong>'+
                    '<p>'+arr.destino.estado+'</p>'+
                '</div>'+
                '<div class="dado">'+
                    '<strong>Cidade</strong>'+
                    '<p>'+arr.destino.cidade+'</p>'+
                '</div>'+
                '<div class="dado">'+
                    '<strong>Data de partida</strong>'+
                    '<p>'+new Date(arr.dataPartida).toLocaleDateString('pt-BR')+'</p>'+
                '</div>'+
                '<div class="dado">'+
                    '<strong>Duração</strong>'+
                    '<p>'+arr.duracaoDias+' dias</p>'+
                '</div>'+
            '</div>'+
            '<div class="descricao dado">'+
              '<strong>Descrição</strong>'+
              '<p>' + arr.descricao +'</p>'+
            '</div>'+
        '</div>';
    document.getElementById("pacote-content").innerHTML = pacoteContent;

    if (conta && JSON.parse(conta).usuario.tipo == 'cliente') {
      const btnCompra = document.getElementById('btn-compra')
      btnCompra.style.visibility = 'inherit'
    }
}




