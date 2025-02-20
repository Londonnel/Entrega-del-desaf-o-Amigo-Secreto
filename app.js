// Declarar una variable array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const nombre = document.getElementById("nombre-amigo").value;  // Obtener el nombre del input
    if (nombre) {
        amigos.push(nombre);  // Agregar el nombre al array de amigos
        console.log(`${nombre} ha sido agregado a la lista de amigos.`);
        actualizarListaAmigos();
    }
    document.getElementById("nombre-amigo").value = "";  // Limpiar el campo de texto
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const ul = document.getElementById("amigos-ul");
    ul.innerHTML = "";  // Limpiar la lista actual
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigos() {
    // Verificar si hay suficientes amigos para sortear
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Hacer una copia del array original para no modificar el array de amigos original
    let amigosSorteados = [...amigos];

    // Mezclar el array de amigos usando el algoritmo de Fisher-Yates
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]]; // Intercambiar elementos
    }

    // Asignar el amigo secreto
    let amigosSecretos = {};
    for (let i = 0; i < amigos.length; i++) {
        amigosSecretos[amigos[i]] = amigosSorteados[(i + 1) % amigosSorteados.length]; // Asignar el siguiente amigo en la lista
    }

    // Mostrar los resultados del sorteo
    mostrarResultados(amigosSecretos);
}

// Función para mostrar los resultados del sorteo en el HTML
function mostrarResultados(amigosSecretos) {
    const ul = document.getElementById("resultados-ul");
    ul.innerHTML = "";  // Limpiar resultados anteriores

    for (let amigo in amigosSecretos) {
        const li = document.createElement("li");
        li.textContent = `${amigo} -> Amigo Secreto: ${amigosSecretos[amigo]}`;
        li.classList.add("amigo-secreto");
        ul.appendChild(li);
    }
}

function reiniciarJuego() {
    // Reiniciar la lista de amigos
    amigos = [];

    // Limpiar la lista de amigos en el HTML
    document.getElementById("amigos-ul").innerHTML = "";

    // Limpiar los resultados del sorteo
    document.getElementById("resultados-ul").innerHTML = "";

    // También podrías restablecer otros estados si es necesario, como el campo de entrada
    document.getElementById("nombre-amigo").value = "";

    alert("El juego ha sido reiniciado.");
}

