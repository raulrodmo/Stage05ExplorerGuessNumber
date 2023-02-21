// Variáveis
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10);
let numberOfAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterClick)

// Funções
function handleTryClick(event) { // Funções callback
  event.preventDefault(); //não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  let nameAttempts = ""

  if(numberOfAttempts != 1){
    nameAttempts="tentativas"
  } else {
    nameAttempts="tentativa"
  }

  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    
    screenTwo.querySelector("h2").innerText = `Você acertou em ${numberOfAttempts} ${nameAttempts}`
  } else if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
    alert('O número está fora do limite estabelecido 0 a 10')
  }

  inputNumber.value = ""
  numberOfAttempts++
}

function handleResetClick() {
  toggleScreen()

  numberOfAttempts = 1;

  randomNumber = Math.round(Math.random() * 10);

}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function enterClick(e) {
  if(e.key == 'Enter' && screenOne.classList.contains('hide')){
    handleResetClick()
}}