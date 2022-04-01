const querystring =  window.location.search
const urlParam = new URLSearchParams(querystring);
const id =  urlParam.get('id')

var tituloForm = document.getElementById('titulo-formulario')

tituloForm.innerHTML += id

var form = document.getElementById("form-cadastro-cliente");

fetch('http://localhost:3333/clientes/' + id, {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}).then(res => res.json()).then(data => carregaFormulario(data))

function carregaFormulario(data) {
  const inputNome = document.getElementById('nome')

  inputNome.value = data.nome
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  var url = "http://localhost:3333/clientes/" + id;
  console.log(id);
  var formData = new FormData(form);

  await fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData)),
})

    //console.log(response.json())
})

