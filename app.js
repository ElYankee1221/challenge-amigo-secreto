// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaResultado = document.querySelector("#resultado");
let lista = document.querySelector("#listaAmigos");

//Funcion para validar el campo de ingresar amigos y para agregarlos al array de amigos.

function agregarAmigo() {
    //Limpiar la lista del amigo secreto del sorteo anterior
    listaResultado.innerHTML = '';

    let amigo = document.getElementById("amigo").value;

    //Validacion de campos llenos o vacios 
    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo);
        document.querySelector("#amigo").value = '';
        listaAmigo();
    }
}

//Funcion para crear y mostrar los amigos en el array amigos.

function listaAmigo() {
    lista.innerHTML = '';

    for (let index = 0; index < amigos.length; index++) {
        const amigo = amigos[index];
        //Crear la nueva etiqueta
        let etiquta = document.createElement('li');
        //Asignar a un amigo a esa etiqueta
        etiquta.textContent = amigo;
        //Agregar a la nueva etiqueta con todo y su contenido 
        lista.appendChild(etiquta);
    }
}

//Funcion para generar un numero aleatorio, asignarlo a un amigo del array amigos  y mostrarlo.

function sortearAmigo() {
    //Validacion de lista con valores o vacia 
    if (amigos == '') {
        alert("Por favor, inserta varios nombres para poder sortear.");
    } else {
        numeroAmigos = amigos.length;
        let numeroAleatorio = Math.floor(Math.random()*numeroAmigos);
        let amigoSecreto = amigos[numeroAleatorio];
        lista.innerHTML = "";
        listaResultado.innerHTML = "El amigo secreto sorteado es: "+amigoSecreto;
        amigos = [];
    }
}