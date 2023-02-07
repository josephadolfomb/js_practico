const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//queryselectorAll, getelementbyid, get elements by classname

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// // h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';
// h1.getAttribute('pantalla')
// // console.log(h1.getAttribute('class'))
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('verde'); cambiar
// // h1.classList.contains('verde'); true false

// input.value = "456"

// const img = document.createElement('img');

// img.setAttribute('src', 'https://images.pexels.com/photos/15127334/pexels-photo-15127334.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load');

// console.log(img);

// pid.innerHTML = "";
// pid.appendChild(img); 

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}