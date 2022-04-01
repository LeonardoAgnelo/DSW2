var xmlhttp = new XMLHttpRequest();
var form = document.getElementById("form-cadastro-agencia");



form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const querystring =  window.location.search
  const urlParam = new URLSearchParams(querystring);
  const id =  urlParam.get('id')
  var url = "http://localhost:3333/pacotes/agencias/" + id; // loca:3333/pacoste/agencia/+id
  console.log(id);
  var formData = new FormData(form);

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData)),
})

  //console.log(response.json())
})
