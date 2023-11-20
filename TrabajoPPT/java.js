let puntosJugador = 0;
let rondasJugadas = 0;
function empezarJuego() {
       const jugador = document.getElementById("label1").value;
       
   
    
       document.getElementById("botonJugar").disabled = false;
       document.getElementById("botonEstadisticas").disabled = false;
   }

 function jugarPartida(){
     
   const imagenPiedra = document.getElementById("Ipiedra");
   const imagenPapel = document.getElementById("Ipapel");
   const imagenTijera = document.getElementById("Itijera");
   const botonPiedra = document.getElementById("piedra");
   const botonPapel = document.getElementById("papel");
   const botonTijera = document.getElementById("tijera");

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

 function juego(jugador){
  
  //Hay que poner mas bonito lo del text area y los colores 

   const choices = ["piedra", "papel", "tijera"];
   const computer = choices[Math.floor(Math.random() * 3)];
   const resultadoTextarea = document.getElementById("resultados");
 
   if ((jugador === "papel "&& computer === "piedra") || (jugador === "piedra" && computer === "tijera") || (jugador === "tijera" && computer === "papel")) {
    resultadoTextarea.value += "Ganaste "+"Has elegido:  " +jugador+ " La CPU ha elegido:  "+computer+"\n";
   }else if ((jugador === "piedra" && computer === "papel") || (jugador === "papel" && computer === "tijera") || (jugador === "tijera" && computer === "piedra")){
    resultadoTextarea.value += "Perdiste "+"Has elegido:  "+jugador+ " La CPU ha elegido: " +computer+"\n";
   }else{
    resultadoTextarea.value += "Empate "+"Has elegido: " +jugador+ " La CPU ha elegido: " +computer+"\n";
       
       rondasJugadas--;
   }
   
   document.getElementById("numeroTextArea").value= "Puntos: "+puntosJugador;
   rondasJugadas++;

   if (rondasJugadas === rondasTotales){
       
       resultadoTextarea.value += "----------------Gracias por jugar!-----------------\n";
       
   }
   document.getElementById("botonJugar").disabled = true;
   document.getElementById("botonEstadisticas").disabled = true;
  
 }

 
