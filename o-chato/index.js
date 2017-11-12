const chato = () => {
  swal('Sou Um Chato', 'Eu sou um chato pq sou.', 'success')
  setTimeout(chato, 1000)
}
chato()
