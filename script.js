/*
boton = document.querySelector() -> 
    -siempre utiliza al primero que encuentra, 
    -si queremos cambiar eso, tendriamos que utilizar
    -document.querySelectorAll
    -esto nos dará un array de objetos con todo lo seleccionado
'.class' para clases
' #id' para id
' body ' para tarjeta 
' section.section2 ' para secciones

-A que evento le debo prestar atencion? que va hacer?
-Las acciones del usuario generará un evento, este evento reaccionará a consecuencia
-Un boton al dar click, al dar click este realizará algún evento

-Programar la Acción
-boton.addeventListener((parametro:click), ()=>), boton es la constante y se relacionara con algun dato del documetno.
-El evetno a capturar será elc lick, lo cual js reaccionará,
*/

//SEPARAR TODO POR MODULOS
//esto está atado con alambre

/* ---BOTONES TEMAS--- */
const darkMode = document.querySelector('#switch');
const rojo = document.querySelector('#rojo');
const blue = document.querySelector('#azul');
const verde = document.querySelector('#verde');
const showFormCard = document.querySelector('#botonMostrarForm');

/*---FORMULARIOS 1 Y 2 */
const formCard = document.querySelector("#form1");
const formEstadisticas = document.querySelector("#form2");

/*--- INFO CARD */
const inputNombre = document.querySelector("#nombreInput");
const nombre = document.querySelector('#nombre');
const descripcion = document.querySelector("#descripcion");
const descripcionInput = document.querySelector("#descripcionInput");

//H3 Y H4 DE LAS ESTADISTICAS
const h3s = document.querySelectorAll(".estadisticas h3");
const h4s = document.querySelectorAll(".estadisticas h4");

//trae todos los inputs juntos, 3 titulos 3 datos
const titulos = document.querySelectorAll(".titulo");
const datos = document.querySelectorAll(".dato");


function limpiarModos() {
    document.body.classList.remove('dark-mode', 'rojo-mode', 'azul-mode', 'verde-mode');

}

//ESTO OBTIENE EL ITEM
const temaGuardado = localStorage.getItem("tema");
switch (temaGuardado) {
    case "dark":
        document.body.classList.add("dark-mode");
        darkMode.textContent = "modo claro"
        break;
    case "rojo":
        document.body.classList.add("rojo-mode");
        break;
    case "azul":
        document.body.classList.add("azul-mode");
        break;
    case "verde":
        document.body.classList.add("verde-mode");
        break;
}

const datosCard = JSON.parse(localStorage.getItem("datos"));
const guardadas = JSON.parse(localStorage.getItem("estadisticas"));
if (datosCard) {
    nombre.textContent = datosCard.nombre
    descripcion.textContent = datosCard.descripcion
}
if (guardadas) {
    guardadas.forEach((stat, index) => {
        h3s[index].textContent = stat.dato;
        h4s[index].textContent = stat.titulo;
    });
}

darkMode.addEventListener('click', () => {
    document.body.classList.remove('rojo-mode', 'azul-mode', 'verde-mode');
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains("dark-mode")) {
        darkMode.textContent = "modo claro"
        localStorage.setItem("tema", "dark"); //aca se guarda en el locaalstor
    } else {
        darkMode.textContent = "modo oscuro"
        localStorage.setItem("tema", "claro");

    }
});

rojo.addEventListener('click', () => {
    limpiarModos();
    document.body.classList.add('rojo-mode');
    localStorage.setItem("tema", "rojo");
});

blue.addEventListener('click', () => {
    limpiarModos();
    document.body.classList.add('azul-mode');
    localStorage.setItem("tema", "azul");
});

verde.addEventListener('click', () => {
    limpiarModos();
    document.body.classList.add('verde-mode');
    localStorage.setItem("tema", "verde");
});

//aca es donde aparece el formCard
showFormCard.addEventListener('click', () => {
    formCard.classList.remove("oculto");
    formEstadisticas.classList.add("oculto");
});

//se guardan los datos del formCard y se modifican elementos del html
formCard.addEventListener("submit", function (e) {
    e.preventDefault();
    nombre.textContent = inputNombre.value;
    descripcion.textContent = descripcionInput.value;

    const datosCard = {
        nombre: inputNombre.value,
        descripcion: descripcionInput.value
    }

    localStorage.setItem("datos", JSON.stringify(datosCard));
    formCard.classList.add("oculto");
    formEstadisticas.classList.remove("oculto");

});
formEstadisticas.addEventListener("submit", function (e) {
    e.preventDefault();

    const estadisticas = [];

    titulos.forEach((tituloInput, index) => {
        estadisticas.push({
            titulo: tituloInput.value,
            dato: datos[index].value
        });
    });

    estadisticas.forEach((stat, index) => {
        h3s[index].textContent = stat.dato;
        h4s[index].textContent = stat.titulo;
    });

    localStorage.setItem("estadisticas", JSON.stringify(estadisticas));
    titulos.forEach(input => input.value = "");
    datos.forEach(input => input.value = "");
    formEstadisticas.classList.add("oculto");
    formCard.classList.add("oculto")

});