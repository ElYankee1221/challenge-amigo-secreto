// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    var amigo = document.getElementById("amigo").value;
    //console.log(amigo);

    if (amigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        console.log(amigo);
        amigos.push(amigo);
        console.log(amigos);
        //document.getElementById("amigo").value = '';
        document.querySelector("#amigo").value = '';
    }

}

function sortearAmigo() {
    
}