
let nombreUsuario = prompt("Cual es tu nombre?");
let edadUsuario = parseInt(prompt("Cuantos años tienes?"));
let lenguajeEstudio = prompt("Que lenguaje de programación estas estudiando?");

alert(`Hola ${nombreUsuario}, tienes ${edadUsuario} años y estas aprendiendo ${lenguajeEstudio}.`); 

let respuesta = parseInt(prompt(`Te gusta estudiar ${lenguajeEstudio}? Responde con el numero 1 para SÍ o 2 para NO`)); 

if (respuesta === 1){
    alert("Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta === 2){
    alert("Oh, que pena... Ya intentaste aprender otros lenguajes?")
}


