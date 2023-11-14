 function empezarJuego() {
        const jugador = document.getElementById("label1").value;
        const rondas = prompt("Selecciona la cantidad de rondas (3 o 5):");
    
        if (rondas === "3" || rondas === "5") {
            alert("¡Bienvenido al juego " + jugador + "! Suerte, la vas a necesitar!");
        } else {
            alert("Seleccione un número de rondas válido");
            return; 
        }
    
        document.getElementById("botonJugar").disabled = false;
        document.getElementById("botonEstadisticas").disabled = false;
    }


