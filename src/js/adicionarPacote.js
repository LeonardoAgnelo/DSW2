const querystring =  window.location.search
const urlParam = new URLSearchParams(querystring);
const id =  urlParam.get('id')

const conta = localStorage.getItem('excellentVoyage.session')
if (!conta || JSON.parse(conta).usuario.tipo != 'agencia') {
  window.location.replace('/src/pages')
}

var form = document.getElementById("form-cadastro-cliente");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  var url = "http://localhost:3333/pacotes";
  //console.log(id);
  var formData = new FormData(form);

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + JSON.parse(conta).token
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })

    window.location.replace('/src/pages/perfilAgnecia.html')
  } catch (err) {
    alert(err.error)
  }
})