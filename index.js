let invitados = [];

// Agendar el evento cuando el usuario presione CARGAR.
let cargaEvento = document.getElementById("evento");
cargaEvento.addEventListener("submit", agendarEvento);

function agendarEvento(e) {
    e.preventDefault();

    // Tomamos el valor de los datos titulo, fecha y hora del evento.
    let titulo = document.getElementById("titulo").value;
    document.getElementById("titulo").value = "";
    let fecha = document.getElementById("fecha").value;
    document.getElementById("fecha").value = "";
    let hora = document.getElementById("hora").value;
    document.getElementById("hora").value = "";

    // Guardamos los invitados en forma de lista.
    let listaDeInvitados = "";
    for (const invitado of invitados) {
        listaDeInvitados += `<li> ${invitado} </li>`;
    }
    // Mostramos la info del evento debajo del formulario.
    let eventoGuardado = document.createElement("div");
    eventoGuardado.innerHTML = `<h3> TITULO DEL EVENTO:</h3> <p> ${titulo} </p>
        <h4> FECHA:</h4> <p> ${fecha} </p>
        <h4> HORA:</h4> <p> ${hora} </p>
        <h4> INVITADOS:</h4>
        <ul> ${listaDeInvitados} </ul>`
    let listadoDeEvento = document.getElementById("eventoCargado");
    listadoDeEvento.appendChild(eventoGuardado);
    invitados = [];
}

// Cargamos los invitados al array INVITADOS al presionar el boton +.
let cargaInvitados = document.getElementById("agregarInv");
cargaInvitados.onclick = (e) => {
    e.preventDefault();
    let invitado = document.getElementById("invitado").value;
    invitados.push(invitado)
    document.getElementById("invitado").value = "";
}