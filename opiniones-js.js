let btnAlert = document.getElementById('btn-alert')
console.log(btnAlert)

btnAlert.addEventListener('click',()=>{
    alert('Alerta Camaradas')
})

contador = 0; 
let pantallaContador = document.getElementById('counter');
let btnSumar = document.getElementById('btn-sumar');
let btnReset =document.getElementById('btn-reset');

btnSumar.addEventListener('click', () => {
    contador ++;
    pantallaContador.textContent = contador;
})

btnReset.addEventListener('click', () => {
    contador = 0;
    pantallaContador.textContent = contador;
})