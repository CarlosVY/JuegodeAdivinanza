//Declaración de variables
var randomNumber = Math.floor(Math.random() * 100) + 1;
var introducir_num = document.querySelector('.introducir_num');
var ultimoResult = document.querySelector('.ultimoResult');
var pistas = document.querySelector('.pistas');
var btn_probar = document.querySelector('.btn_probar');
var campo_num = document.querySelector('.campo_num');
var Contador = 1;
var resetButton;

//Incialización de la función
function checkGuess() {
  var userGuess = Number(campo_num.value);
  if (Contador === 1) {
    introducir_num.textContent = 'INTENTOS ANTERIORES: ';
    introducir_num.style.backgroundColor = 'white';
  }

  introducir_num.textContent += userGuess + ', ';

  if (userGuess === randomNumber) {
   ultimoResult.textContent = '¡Felicidades! ¡Lo adivinaste!';
   ultimoResult.style.backgroundColor = 'green';
    pistas.textContent = '';
    setGameOver();
  } else if (Contador === 10) {
   ultimoResult.textContent = '¡¡¡PERDISTE!!!';
    pistas.textContent = '';
    setGameOver();
  } else {
   ultimoResult.textContent = '¡Equivocado!';
   ultimoResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      pistas.textContent='¡EL NUMERO ES MUY BAJO!' ;
      pistas.style.backgroundColor = 'green';
    } else if(userGuess > randomNumber) {
      pistas.textContent = 'EL NUMERO ES MUY ALTO!';
      pistas.style.backgroundColor = 'red';
    }
  }
  document.getElementById("display-resultado").innerHTML = `Este es el intento numero: ${Contador} DE 10.`

  Contador++;
  campo_num.value = '';
}

btn_probar.addEventListener('click', checkGuess);

function setGameOver() {
  campo_num.disabled = true;
  btn_probar.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Quieres intentarlo otra vez?';
  resetButton.style.cursor = 'pointer';
  document.body.appendChild(resetButton);
  resetButton.style.color = 'red';
  resetButton.style.backgroundColor = 'Yellow';
  resetButton.style.height = '90px';
  resetButton.style.fontSize = '50px';
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  Contador = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  campo_num.disabled = false;
  btn_probar.disabled = false;
  campo_num.value = '';
  campo_num.focus();
 ultimoResult.style.backgroundColor = 'white';
  randomNumber=Math.floor(Math.random() * 100) + 1;
}
    