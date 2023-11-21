
let rondasJugadas = 0;
function empezarJuego() {
       const jugador = document.getElementById("label1").value;
     
      
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
       for (let i = 0; i < rondasTotales; i++){
           juego(jugador);
       }
       
       
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


     
       resultadoTextarea.value += "----------------Gracias por jugar!-----------------\n";
       
       const limpar = document.getElementById("resultados");
       setTimeout(function(){
           limpar.value = "";
           botonEstadisticas.hidden = false;
           botonJugar.hidden= false;
           formularioJugador.hidden = false;
           resultadoTextarea.hidden = true;
           numero.hidden = true;
           rondasJugadas = 0;
       } , 5000);
      
      
       
   }
    
   

   
  function limpar (){
      resultadoTextarea.value = "";
     
  }
 }

 function showGameResults(jugador, ganador) {
    // Almacena los datos de la partida
    const partida = {
        jugador: jugador,
        fecha: new Date().toLocaleString(),
        puntos: calcularPuntos(ganador, jugador)
    };

    // Aquí puedes almacenar la partida en una estructura de datos, como un array o una base de datos
    // Por ahora, solo imprimiré los datos en la consola para que los veas

    const textarea = document.getElementById("numero");
    textarea.value += `Jugador: ${partida.jugador}\nFecha: ${partida.fecha}\nPuntos: ${partida.puntos}\n \n`;
    // Muestra el resultado final en un alert
    alert("El ganador es: " + ganador);
}

function calcularPuntos(ganador, jugador) {
    if (ganador === "Empate") {
        return 1;
    } else if (ganador === jugador) {
        return 3;
    } else {
        return 0;
    }
}

const gameStatisticsContainer = document.getElementById("numero");


 
