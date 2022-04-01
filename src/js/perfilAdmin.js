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
})
  .then(response => response.json())
  .then(data => functionCliente(data))

var url2 = "http://localhost:3333/agencias"
fetch(url2, {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(conta).token
  },
  method: 'GET',
})
  .then(response => response.json())
  .then(data => functionAgencia(data))

function functionCliente(arr){
    let out = ""
    for(cliente of arr){
      out +=
        '<tr>'+
            '<td>'+ cliente.id +'</td>'+
            '<td >'+ cliente.nome +'</td>'+
            '<td >'+ cliente.cpf +'</td>'+
            '<td >'+ cliente.email +'</td>'+
            '<td >'+ cliente.sexo +'</td>'+
            '<td >'+ cliente.telefone +'</td>'+
            '<td >'+ new Date(cliente.dataNascimento).toLocaleDateString('pt-BR') +'</td>'+
            '<td><a href="formularioEdicaoCliente.html?id='+ cliente.id +'">Editar</a></td>'+
            //falta saber o caminho para excluir uma pessoa
            '<td><button name="deleteCliente" id="deleteCliente-' + cliente.id + '" onclick="deletaUsuario(\'cliente\',' + cliente.id + ')"">Remover</button></td>'+
        '</tr>';

        document.getElementById("tabela-clientes").innerHTML = out;

        // var btnDeleteCliente = document.getElementById("deleteCliente-" + cliente.id)
        // console.log(btnDeleteCliente)
        // btnDeleteCliente.onclick = async () => await deletaUsuario('cliente', cliente.id)
        // btnDeleteCliente.addEventListener("click", eventDeleteCliente)

        // function eventDeleteCliente(){
        //     let url = 'http://localhost:3333/clientes/'+ cliente.id;
        //     fetch(url,{method: 'DELETE'})
        // }
    }
};

async function deletaUsuario(tipo, id) {
  let url = 'http://localhost:3333/' + tipo + 's/'+ id;
  if (confirm("Tem certeza de que deseja excluir este usuário? todas as compras deste usuário serão excluidas")) {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(conta).token
      }
    })
    window.location.reload()
  }
}

function functionAgencia(arr){
    let out= ""
    for(agencia of arr){
        out +=
        '<tr>'+
            '<td>'+ agencia.id +'</td>'+
            '<td>'+ agencia.nome +'</td>'+
            '<td>'+ agencia.cnpj +'</td>'+
            '<td>'+ agencia.email +'</td>'+
            '<td><a href="formularioEdicaoAgencia.html?id='+ agencia.id +'">Editar</a></td>'+
            //falta saber o caminho para excluir uma pessoa
            '<td><button name="deleteAgencia" id="deleteAgencia" onclick="return confirm("Tem certeza de que deseja excluir este usuário? todas os pacotes turisticos desta agencia serão excluidos");">Remover</button></td>'+
        '</tr>';

        document.getElementById("tabela-agencias").innerHTML = out;

        var btnDeleteAgencia = document.getElementById("deleteAgencia")
        btnDeleteAgencia.addEventListener("click", eventDeleteAgencia)

        function eventDeleteAgencia(){
            let url = 'http://localhost:3333/agencias/'+ agencia.id;
            fetch(url,{method: 'DELETE'})
        }
    }
    
}
