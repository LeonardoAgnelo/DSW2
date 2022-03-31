var xmlhttp = new XMLHttpRequest();
var form = document.getElementById("form-cadastro-agencia");

form.addEventListener("submit", async function (event){
    event.preventDefault();

    var url = "http://localhost:3333/agencias";
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