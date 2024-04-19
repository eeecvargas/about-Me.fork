
'use strict';

let nombre = prompt('Por favor, ingresa tu nombre:');

alert('Hola, un gusto ' + nombre);

let score=0;
function hacerPregunta(pregunta) {
    let respuesta = prompt(pregunta + ' (si/no)').toLowerCase();
    console.log();
    if (respuesta === 'si') {
        alert('Es verdad, sí me gusta.');
        console.log('Sabe que me gusta ' + pregunta.toLowerCase());
        score++;
    } else if (respuesta === 'no') {
        alert('Que pena, en verdad sí me gusta ' );
        console.log('No sabe que me gusta ' + pregunta.toLowerCase());
    }
}
let preguntas = [
    '¿Me gusta el basketball?',
    '¿Me gusta leer?',
    '¿Me gusta el cine?',
    '¿Me gustan los video juegos?',
    'Si ya sabemos que me gusta y que no me gusta, dependiendo de eso, ¿Crees que soy alguien de ver documentales?'
];
for (let i = 0; i < preguntas.length; i++) { /*dry*/
    hacerPregunta(preguntas[i]);
}

let añoDeNacimiento ;
let attempts = 0;

while (añoDeNacimiento != 2001 && attempts < 4) {
    añoDeNacimiento = prompt('¿En qué año nací entre (1999/2005)');
    if (añoDeNacimiento < 2001){
        alert ('No tan viejo amigo/a');
        console.log ('No tan viejo amigo/a');
    } else if (añoDeNacimiento > 2001) {
        alert ('No soy tan joven');
        console.log('No soy tan joven');
    } else {
        alert ('Es correcto');
        console.log('Es correcto');
        score++;
        break;
    }
    attempts++;
    if(attempts=4){
        alert('Te quedaste sin intentos!')
    }
}
console.log ('Respuesta: Nací el 2001');
alert ('Respuesta: Nací el 2001');

function preguntaSiete() {
    let animalesFavoritos = ['perro','gato','hamster'];
    let animal;
    attempts = 0;
    while (attempts <6) {
        animal = prompt ('Adivina mi animal favorito');
        animal = animal.toLowerCase();
        for (let i = 0; i < animalesFavoritos.length; i++) {
            if (animal == animalesFavoritos[i]) {
                alert ('adivinaste!');
                console.log ('adivinaste!');
                attempts = 6;
                break;
            } else{
                console.log (animal, '¡Incorrecto!, intento' + attempts + ' de 6');
            }
        }
        attempts++;
    }
console.log ('mis animales favoritos son ' + animalesFavoritos);
}
preguntaSiete();

console.log('tu puntuación es de: ' + score);