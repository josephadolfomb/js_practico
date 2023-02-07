var nombre = "Joseph";
var apellido = "Moran";

console.log(`Mi nombre completo es ${nombre} ${apellido}`);

var ahorro = 2000;
var deudas = 0;
var total = ahorro - deudas;

console.log(`Mi dinero real son: ${total} soles`);

function saludar (name, lastname, nickname) {
    return console.log(`Mi nombre es ${name} ${lastname}, pero prefiero que me digan ${nickname}.`);
}

saludar ("Joseph", "Moran", "joe");

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No tienes una subscripción");
}

//

let typeSubscription = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];
let infoSubscription = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
let userSubscription = "Expert";

for (let i=0; i < typeSubscription.length; i++) {
      if (userSubscription == typeSubscription[i]) {
          console.log(`Estas suscrito al plan ${typeSubscription[i]} en el cual ${infoSubscription[i]}`)
      }
    }

//2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//solución:

let i = 0;

while (i < 5) {
    i++;
    console.log("El valor de i es: " + i);
}

let i = 10;

while (i >= 2) {
    i--;
    console.log(`El valor de i es: ${i}`);
}

//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
//💡 Pista: puedes usar la función prompt de JavaScript.

let a = 2;
let b = 2;
const result = a + b;
let questions = {
    q1: `Cuánto es ${a} + ${b}`
}

function quizzer() {
    let userInput = prompt(questions.q1);
    if (userInput == result) {
        alert("Respondiste correctamente muy bien!")
    } else {
        alert("La respuesta no es la correcta sigue intentando");
    }
}

quizzer();

//2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let frutas = ["manzana", "pera", "uva", "mandarina"];

function first(array) {
    console.log(array[0]);
}

first(frutas);

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

let frutas = ["manzana", "pera", "uva", "mandarina"];

function oneByOne(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

oneByOne(frutas);

// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let frutillas = {
    tipo : "manzana",
    color : "verde",
    sabor : "agridulce",
    forma : "redonda",
};

function oneByOne2(objeto) {
    for (let llave in objeto) {
        console.log(objeto[llave]);
    }
}

oneByOne2(frutillas);