var xmlhttp = new XMLHttpRequest();
var form = document.getElementById("form-cadastro-cliente");

form.addEventListener("submit", async function (event){
    event.preventDefault();

    var url = "https://db33-2804-431-c7d0-4c1d-ac72-26e0-c57b-e6ad.ngrok.io/clientes";
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