/*
// dando erro de CORS, acredito que seja algum probelam relacionado a multipart ao mandar fotos e pdf pois não sei como esta armazenado no BD

var xmlhttp = new XMLHttpRequest();
var form = document.getElementById("form-cadastro-cliente");

form.addEventListener("submit", async function (event){
    event.preventDefault();

    var url = "http://localhost:3333/pacotes/agencias/3"; //precisa adicionar o id da agencia que esta adicionando o 3 é só teste
    var formData = new FormData(form);

    const response = await fetch(url, {
        method: 'POST',
        headers: {

          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })

    //console.log(response.json())

})
*/