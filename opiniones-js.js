let btnAlert = document.getElementById('btn-alert')
console.log(btnAlert)

btnAlert.addEventListener('click',()=>{
    alert('Alerta Camaradas')
})

contador = 0; 
const pantallaContador = document.getElementById('counter'); /* Nota: Usamos const para los elementos HTML porque la conexión con ese elemento no va a cambiar nunca. Es una buena práctica. */
const btnSumar = document.getElementById('btn-sumar');
const btnReset =document.getElementById('btn-reset');

btnSumar.addEventListener('click', () => {
    contador ++;
    pantallaContador.textContent = contador;
})

btnReset.addEventListener('click', () => {
    contador = 0;
    pantallaContador.textContent = contador;
})