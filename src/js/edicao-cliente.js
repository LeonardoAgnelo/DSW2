const querystring =  window.location.search
const urlParam = new URLSearchParams(querystring);
const id =  urlParam.get('id')

const conta = localStorage.getItem('excellentVoyage.session')

if (!conta || JSON.parse(conta).usuario.tipo != 'admin') {
  window.location.replace('/src/pages')
}

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
  const inputEmail = document.getElementById('email')
  const inputCPF = document.getElementById('cpf')
  const inputTelefone = document.getElementById('telefone')
  const inputSexo = document.getElementById('sexo')
  const inputData = document.getElementById('data-nascimento')


  inputNome.value = data.nome;
  inputEmail.value = data.email;
  inputCPF.value = data.cpf;
  inputTelefone.value = data.telefone;
  inputSexo.value = data.sexo;
  inputData.value = data.dataNascimento;

}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  var url = "http://localhost:3333/clientes/" + id;
  console.log(id);
  var formData = new FormData(form);

  try {
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(conta).token
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })

    window.location.replace('/src/pages/perfilAdmin.html')
  } catch (err) {
    alert(err.error)
  }

    //console.log(response.json())
})

