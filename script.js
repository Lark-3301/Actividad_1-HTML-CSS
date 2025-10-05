// Evento para cambiar al modo oscuro el index.
document.getElementById("modo-btn").addEventListener("click", function() {
    const body = document.body;
  
    // Condicional que hace que si el body tiene la clase normal, cámbiala por la oscura
    if (body.classList.contains("bodyIndex")) {
      body.classList.replace("bodyIndex", "bodyIndex-oscuro");
    } 
    // Si ya está en modo oscuro, vuelve al normal
    else {
      body.classList.replace("bodyIndex-oscuro", "bodyIndex");
    }
  });

  // Promt donde nos saludas y ponemos nuestro nombre.

  const respuestaSaludo = prompt("Iniciando setup... ¿Cuál es tu nombre, programador elegante? ");
  let nombreAlSaludo = document.getElementById('saludo');

  // según si el String es vacío o no, nos dará una bienvenida o no.
  if (respuestaSaludo !== "") {
   // alert(`Genial, ${respuestaSaludo}! Prepara tus pies para el mejor calzado dev del mercado 😎`);
    nombreAlSaludo.innerText = `Genial, ${respuestaSaludo}! Prepara tus pies para el mejor calzado dev del mercado 😎`;
  } else {
   // alert("😅 Sin nombre no hay zapatos personalizados... ¡vuelve a intentarlo!");
    nombreAlSaludo.innerText = "😅 Sin nombre no hay zapatos personalizados... ¡vuelve a intentarlo!";
  }