var form = document.getElementById("form-login");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  var url = "https://e16b-2804-431-c7d0-4c1d-ac72-26e0-c57b-e6ad.ngrok.io/pacotes/agencias";
  var formData = new FormData(form);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData)),
})
  console.log(response.json())
})
