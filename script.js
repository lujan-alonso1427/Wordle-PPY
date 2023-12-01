let intentos = 6;
let diccionario = [
  "APPLE", 
  "HOUSE", 
  "HURLS", 
  "SMILE", 
  "MOUSE", 
  "WINGS", 
  "YOUTH"
];
let palabra = obtenerPalabra(diccionario);
let button = document.getElementById("guess-button");
console.log(palabra)

button.addEventListener("click", intentar);


function obtenerPalabra(diccionario){
  let max = diccionario.length - 1 
  let min = 0
  let i = Math.floor(Math.random() * (max - min + 1)) + min;
  palabraSelecionada = diccionario [i];
  return palabraSelecionada;
} 

function intentar (){
  const INTENTO = leerIntento();
  console.log (INTENTO)
  if (INTENTO === palabra) {
    terminar("<h1>GANASTE!😀</h1>");
    return;
  }
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";

  for(let i in INTENTO) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter"
    let color;
    let letra = INTENTO[i]
    if (letra == palabra[i]){
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'green';

    } else if(palabra.includes(letra)){
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'yellow';
    } else{
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'grey';
    }
    SPAN.style.backgroundColor = color;
    ROW.appendChild(SPAN);
  }
  intentos--;
  if (intentos == 0){
    terminar("<h1>PERDISTE!😖</h1>");
  }
  GRID.appendChild(ROW) 
}

function terminar (mensaje){
  let input = document.getElementById("guess-input");
  input.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById("guesses");
  contenedor.innerHTML = mensaje;
}

function leerIntento (){
  let intento = document.getElementById("guess-input");
  intento = intento.value;
  intento = intento.toUpperCase(); 
  return intento;
}



