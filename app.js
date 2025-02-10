// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array to save the friend's names
const amigos = []; 

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre); // Agregar el nombre al array
        actualizarLista(); // Actualizar la lista en la UI
        input.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML =""; 

    amigos.forEach ((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert ("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    let shuffled = [...amigos].sort(() => Math.random() -0.5);

    shuffled.forEach((amigo, index) => {
        const li = document.createElement("li");
        const siguiente = shuffled[(index + 1) % shuffled.length];
        li.textContent = `${amigo} → ${siguiente}`;
        resultadoLista.appendChild(li);
    });
}