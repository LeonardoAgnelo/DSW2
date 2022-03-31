const conta = localStorage.getItem('excellentVoyage.session')

if (conta) {
  window.location.replace('/src/pages')
}
