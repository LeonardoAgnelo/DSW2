const conta = JSON.parse(localStorage.getItem('excellentVoyage.session'))

if(conta.usuario.tipo != 'agencia'){
    window.location.replace('/src/pages')
}

