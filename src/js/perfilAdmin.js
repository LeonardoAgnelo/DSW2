const conta = localStorage.getItem('excellentVoyage.session')

if (!conta || JSON.parse(conta).usuario.tipo != 'admin') {
    window.location.replace('/src/pages')
  }  

var url1 = "http://localhost:3333/clientes"
fetch(url1, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(conta).token
    },
    method: 'GET',
  }).then(response => response.json()).then(data => functionCliente(data))

  var url2 = "http://localhost:3333/agencias"
    fetch(url2, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(conta).token
    },
    method: 'GET',
  }).then(response => response.json()).then(data => functionAgencia(data))

function functionCliente(arr){
    let out = ""
    for(cliente in arr){
    out +=
        '<tr>'+
            '<td>'+ cliente[i].id +'</td>'+
            '<td >'+ cliente[i].nome +'</td>'+
            '<td >'+ cliente[i].cpf +'</td>'+
            '<td >'+ cliente[i].email +'</td>'+
            '<td >'+ cliente[i].sexo +'</td>'+
            '<td >'+ cliente[i].telefone +'</td>'+
            '<td >'+ cliente[i].data +'</td>'+
            '<td><a href="formularioEdicaoCliente.html?id='+ cliente[i].id +'>Editar</a></td>'+
            //falta saber o caminho para excluir uma pessoa
            '<td><button name="deleteCliente" id="deleteAgencia" onclick="return confirm("Tem certeza de que deseja excluir este usuário? todas as compras deste usuário serão excluidas");">Remover</button></td>'+
        '</tr>';

        var btnDeleteCliente = document.getElementById("deleteCliente")
        btnDeleteCliente.addEventListener("click", eventDeleteCliente)

        function eventDeleteCliente(){
            let url = 'http://localhost:3333/clientes'+ cliente[i].id;
            fetch(url,{method: 'DELETE'})
        }
    }
    document.getElementById("tabela-clientes").innerHTML = out;
};

function functionAgencia(arr){
    let out= ""
    for(agnecia in arr){
        out +=
        '<tr>'+
            '<td>'+ agnecia[i].id +'</td>'+
            '<td>'+ agnecia[i].nome +'</td>'+
            '<td>'+ agnecia[i].cnpj +'</td>'+
            '<td>'+ agnecia[i].email +'</td>'+
            '<td><a href="formularioEdicaoAgencia.html?id='+ agnecia[i].id +'">Editar</a></td>'+
            //falta saber o caminho para excluir uma pessoa
            '<td><button name="deleteAgencia" id="deleteAgencia" onclick="return confirm("Tem certeza de que deseja excluir este usuário? todas os pacotes turisticos desta agencia serão excluidos");">Remover</button></td>'+
        '</tr>';

        var btnDeleteAgencia = document.getElementById("deleteAgencia")
        btnDeleteAgencia.addEventListener("click", eventDeleteAgencia)

        function eventDeleteAgencia(){
            let url = 'http://localhost:3333/agencias'+ agencia[i].id;
            fetch(url,{method: 'DELETE'})
        }
    }
    document.getElementById("tabela-agencias").innerHTML = out;
}
