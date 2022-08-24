console.log("Entro al main.js");

// localStorage.setItem("colorPagina", "blue");
// const titulo = document.getElementById("titulo");
// let cat = localStorage.getItem("miGato");
// let color = localStorage.getItem("colorPagina");

// titulo.style.color = color;

// console.log(cat);
// localStorage.clear();

let nombres = [];
let nombre_previo = "";
let editando = false;

const nombreInput = document.getElementById("nombreInput");
const lista = document.getElementById("lista");

function agregarNombre() {
    const nombre = nombreInput.value;
    if (editando == true) {
        //aqui se hace la edicion
    } else {
        // aqui se agrega
        nombres.push(nombre);
        localStorage.setItem("nombres", JSON.stringify(nombres));
        nombreInput.value = "";
        actualizarLista();
    }
}
function actualizarLista() {
    lista.innerHTML = "";
    console.log("entro a actualizarLista")
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("list-group-item");
        lista.appendChild(li);
        
    });
}

function limpiarNombre() {
    localStorage.clear();
    nombres = [];
    console.log(nombres);
}