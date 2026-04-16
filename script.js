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

const darkMode = document.querySelector('.switch');
const rojo = document.querySelector('#rojo');
const blue = document.querySelector('#azul');
const verde = document.querySelector('#verde');


darkMode.addEventListener('click' , ()=>{
    //dentro es todo lo que se ejecutará
    document.body.classList.remove('rojo-mode','azul-mode','verde-mode');
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains("dark-mode")){
        darkMode.textContent = "modo claro"
    }else {
        darkMode.textContent = "modo oscuro"
    }
});

rojo.addEventListener('click' , ()=>{
    //dentro es todo lo que se ejecutará
    document.body.classList.remove('dark-mode','azul-mode','verde-mode');
    document.body.classList.toggle('rojo-mode');
   
});

azul.addEventListener('click' , ()=>{
    //dentro es todo lo que se ejecutará
    document.body.classList.remove('dark-mode','rojo-mode','verde-mode');
    document.body.classList.toggle('azul-mode');
   
});

verde.addEventListener('click' , ()=>{
    //dentro es todo lo que se ejecutará
    document.body.classList.remove('dark-mode','rojo-mode','azul-mode');
    document.body.classList.toggle('verde-mode');
   
});

