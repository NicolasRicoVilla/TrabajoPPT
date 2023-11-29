
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
      
    rondasJugadas = 0;
    rondasTotales = 0;
    puntosJugador = 0;
    puntosO = 0;
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
const resultadoTextarea = document.getElementById("resultados");
   
  resultadoTextarea.hidden = false;
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
  const tablaPuntuacion = document.getElementById("tablaPuntuacion");

  const choices = ["piedra", "papel", "tijera"];
  const computer = choices[Math.floor(Math.random() * 3)];
  
  // Eliminar espacios adicionales alrededor de la elección del jugador
  jugador = jugador.trim();

  let resultado= '';
  
  if ((jugador === "papel" && computer === "piedra") || (jugador === "piedra" && computer === "tijera") || (jugador === "tijera" && computer === "papel")) {
    resultado = 'Ganaste';
    puntosJugador += 3;
  } else if ((jugador === "piedra" && computer === "papel") || (jugador === "papel" && computer === "tijera") || (jugador === "tijera" && computer === "piedra")) {
    resultado = 'Perdiste';
    puntosO += 3; // Cambiado de puntosCPU a puntosO
  } else {
    resultado = 'Empate';
    puntosJugador += 1;
    puntosO += 1;
  }
  resultadoTextarea.value += `Tú elegiste: ${jugador} \nCPU eligió: ${computer} \nResultado: ${resultado} \n-----------------------------\n`;

    // Agregar una nueva fila a la tabla de puntuación
    const fila = `<tr><td>${rondasJugadas}</td><td></td><td>${puntosJugador}</td><td>${puntosO}</td></tr>`;
    tablaPuntuacion.innerHTML += fila;

  rondasJugadas++;

  if (rondasJugadas === rondasTotales) {
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
          botonEstadisticas.disabled = false;
          botonEstadisticas.hidden = true;
          botonJugar.disabled = false;
          botonJugar.hidden = true;
          formularioJugador.hidden = false;
          resultadoTextarea.hidden = true;
          tablaPuntuacion.hidde = true;
          rondasJugadas = 0;
          tablaPuntuacion.innerHTML = "<tr><th>Ronda</th><th>Apodo del Jugador</th><th>Puntos del Jugador</th><th>Puntos de la CPU</th></tr>";
      } , 5000);
  }
}

const gameStatisticsContainer = document.getElementById("numero");


 // Variables globales para almacenar las estadísticas (simuladas)
let estadisticas = [
  { apodo: 'Jugador1', puntacion: 3, fecha: '2023-01-01' },
  { apodo: 'Jugador2', puntacion: 5, fecha: '2023-01-02' },
  // Agrega más estadísticas según sea necesario
];

function mostrarEstadisticas() {
  // Obtener el contenido del textarea
  const estadisticasTexto = document.getElementById('resultados').value;

  // Convertir el texto a un array de objetos
  const estadisticas = estadisticasTexto.split('\n').map(linea => {
      const [apodoJugador, puntacion, fecha] = linea.split(','); // Suponiendo que los datos están separados por comas
      return {apodoJugador, puntacion: parseInt(puntacion), fecha };
  });

  // Crear una ventana modal
  const modal = window.open('', 'Estadisticas', 'width=400,height=400');

  // Crear el contenido de la ventana modal
  const contenidoModal = `
      <h2>Estadísticas del Juego</h2>
      <table>
          <tr>
              <th>Apodo</th>
              <th>Puntuación</th>
              <th>Fecha</th>
          </tr>
          ${estadisticas.map(estadistica => `
              <tr>
                  <td>${estadistica.apodoJugador}</td>
                  <td>${estadistica.puntacion}</td>
                  <td>${estadistica.fecha}</td>
              </tr>`).join('')}
      </table>
      <button onclick="cerrarVentana()">Cerrar</button>
  `;

  // Agregar el contenido a la ventana modal
  modal.document.body.innerHTML = contenidoModal;
}


function cerrarVentana() {
  // Cerrar la ventana modal
  window.close();
}