var form = document.getElementById("form-login");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  // var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3333/authentication";
  var formData = new FormData(form);

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
  })

  const conta = await response.json()

  localStorage.setItem('excellentVoyage.session', JSON.stringify(conta))

  window.location.replace('/src/pages')
})
