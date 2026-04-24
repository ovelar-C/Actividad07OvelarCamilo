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
const darkMode = document.querySelector('#switch');
const rojo = document.querySelector('#rojo');
const blue = document.querySelector('#azul');
const verde = document.querySelector('#verde');
const aparecer = document.querySelector('#boton1');

const formularioOculto = document.querySelector('.oculto');
const estadisticasOcultas = document.querySelector('.oculto2');

const formulario = document.querySelector(".form1");
const formularioEstadisticas = document.querySelector(".form2");

const inputNombre = document.querySelector("#nombreCardForm");
const nombre = document.querySelector('#nombre');
const descripcion = document.querySelector("#descripcion");
const descripcionInput = document.querySelector("#descripcionInput");

//ESTOS SON LOS H3 Y H4 DE LAS ESTADISTICAS
const h3s = document.querySelectorAll(".seccion h3");
const h4s = document.querySelectorAll(".seccion h4");

/* este objeto contiene objetos que contienen propiedades,
estas propiedades son los elementos referenciados del hmtl*/

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

//aca es donde se oculta o aparece el formulario
aparecer.addEventListener('click', () => {
    formularioOculto.classList.toggle("oculto");

});

//se guardan los datos del formulario y se modifican elementos del html
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    nombre.textContent = inputNombre.value;
    descripcion.textContent = descripcionInput.value;


    const datosCard = {
        nombre: inputNombre.value,
        descripcion: descripcionInput.value
    }

    localStorage.setItem("datos", JSON.stringify(datosCard));
    formularioOculto.classList.add("oculto");
    estadisticasOcultas.classList.remove("oculto2");
});
formularioEstadisticas.addEventListener("submit", function (e) {
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
    estadisticasOcultas.classList.add("oculto2");

});