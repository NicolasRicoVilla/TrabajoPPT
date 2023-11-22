
let rondasJugadas = 0;
let rondasTotales = 0;
let puntosJugador= 0;
let puntosO = 0;
function empezarJuego() {

       const jugador = document.getElementById("label1").value;

       if (jugador.trim() === "") {
        alert("Por favor, ingresa un nombre antes de empezar el juego");
        return; 
    }
      
       document.getElementById("botonJugar").hidden = false;
       document.getElementById("botonEstadisticas").hidden = false;
      
       
       
   }

 function jugarPartida(){
   
   const botonEstadisticas = document.getElementById("botonEstadisticas");
    const botonJugar = document.getElementById("botonJugar");
    const formularioJugador = document.getElementById("formularioJugador");
   const imagenPiedra = document.getElementById("Ipiedra");
   const imagenPapel = document.getElementById("Ipapel");
   const imagenTijera = document.getElementById("Itijera");
   const botonPiedra = document.getElementById("piedra");
   const botonPapel = document.getElementById("papel");
   const botonTijera = document.getElementById("tijera");
const numero= document.getElementById("numero");
const resultadoTextarea = document.getElementById("resultados");
   
  resultadoTextarea.hidden = false;
  numero.hidden = false;
   botonEstadisticas.hidden = true;
   botonJugar.hidden= true;
   formularioJugador.hidden = true;
   imagenPiedra.hidden = false;
   imagenPapel.hidden = false;
   imagenTijera.hidden = false;
   botonPapel.hidden = false;
   botonPiedra.hidden = false;
   botonTijera.hidden = false;

   const rondasSeleccionadas = prompt("Selecciona la cantidad de rondas (3 o 5):");
   if (rondasSeleccionadas === "3" || rondasSeleccionadas === "5"){
     
       rondasTotales = parseInt(rondasSeleccionadas);

       
       
   }else {
       alert("Seleccione un número de rondas válido 3 o 5");
       return;
       
     }
 }

 function juego(jugador) {
    const resultadoTextarea = document.getElementById("resultados");
    const choices = ["piedra", "papel", "tijera"];
    const computer = choices[Math.floor(Math.random() * 3)];
    
    // Eliminar espacios adicionales alrededor de la elección del jugador
    jugador = jugador.trim();
  
    if ((jugador === "papel" && computer === "piedra") || (jugador === "piedra" && computer === "tijera") || (jugador === "tijera" && computer === "papel")) {
      resultadoTextarea.value += "Ganaste " + "Has elegido: " + jugador + " La CPU ha elegido: " + computer + "\n";
    } else if ((jugador === "piedra" && computer === "papel") || (jugador === "papel" && computer === "tijera") || (jugador === "tijera" && computer === "piedra")) {
      resultadoTextarea.value += "Perdiste " + "Has elegido: " + jugador + " La CPU ha elegido: " + computer + "\n";
    } else {
      resultadoTextarea.value += "Empate " + "Has elegido: " + jugador + " La CPU ha elegido: " + computer + "\n";
      rondasJugadas--;
    }

   rondasJugadas++;

   if (rondasJugadas === rondasTotales){
    document.getElementById("botonJugar").disabled = true;
    document.getElementById("botonEstadisticas").disabled = true;
    document.getElementById("piedra").hidden = true;
    document.getElementById("papel").hidden = true;
    document.getElementById("tijera").hidden = true;
    document.getElementById("Ipiedra").hidden = true;
    document.getElementById("Ipapel").hidden = true;
    document.getElementById("Itijera").hidden = true;

    numero.value += `Puntos finales del jugador: ${puntosJugador}\n`;
     
       resultadoTextarea.value += "----------------Gracias por jugar!-----------------\n";
       
       const limpar = document.getElementById("resultados");
       setTimeout(function(){
           limpar.value = "";
           botonEstadisticas.disabled=false;
           botonEstadisticas.hidden = true;
           botonJugar.disabled=false;
           botonJugar.hidden= true;
           formularioJugador.hidden = false;
           resultadoTextarea.hidden = true;
           numero.hidden = true;
           rondasJugadas = 0;
       } , 5000);
      
      
       
   }


}
 


  function jugar(opcionJugador) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const opcionOrdenador = opciones[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (opcionJugador === opcionOrdenador) {
      // Empate
      resultado = 'Empate. 1 punto para cada uno.';
      puntosJugador += 1;
      puntosOrdenador += 1;
    } else if (
      (opcionJugador === 'piedra' && opcionOrdenador === 'tijeras') ||
      (opcionJugador === 'papel' && opcionOrdenador === 'piedra') ||
      (opcionJugador === 'tijeras' && opcionOrdenador === 'papel')
    ) {
      // Jugador gana
      resultado = '¡Ganaste! 3 puntos para ti.';
      puntosJugador += 3;
    } else {
      // Ordenador gana
      resultado = 'Perdiste. 0 puntos para ti.';
      puntosOrdenador += 3;
    }

    actualizarTextarea(resultado);
  }

  function actualizarTextarea(resultado) {
    const textarea = document.getElementById('numero');
    textarea.value += resultado + '\n';
    textarea.scrollTop = textarea.scrollHeight;
    // Actualizar puntajes
    textarea.value += `Puntos del jugador: ${puntosJugador}\n`;
    textarea.value += `Puntos del ordenador: ${puntosCPU}\n\n`;
  }

