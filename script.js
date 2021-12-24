const buttonGenerateLetter = document.querySelector('#criar-carta');
const inputLetterText = document.querySelector('#carta-texto');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const slopeGroup = ['skewleft', 'skewright'];
const wordCounter = document.querySelector('#carta-contador');
const p = document.querySelector('#carta-gerada');

function deleteChildrenOfP() {
  if (p.childNodes.length) {
    for (let i = p.childNodes.length - 1; i >= 0; i -= 1) {
      p.removeChild(p.childNodes[i]);
    }
  }
}

function newClassStyles(event) {
  event.target.removeAttribute('class');
  event.target.classList.add(styleGroup[parseInt(Math.random() * styleGroup.length, 10)]);
  event.target.classList.add(sizeGroup[parseInt(Math.random() * sizeGroup.length, 10)]);
  event.target.classList.add(rotationGroup[parseInt(Math.random() * rotationGroup.length, 10)]);
  event.target.classList.add(slopeGroup[parseInt(Math.random() * slopeGroup.length, 10)]);
}

function arrayInMysteriousLetter(array) {
  for (let i = 0; i < array.length; i += 1) {
    const span = document.createElement('span');
    span.addEventListener('click', newClassStyles);
    span.classList.add(styleGroup[parseInt(Math.random() * styleGroup.length, 10)]);
    span.classList.add(sizeGroup[parseInt(Math.random() * sizeGroup.length, 10)]);
    // if (parseInt(Math.random()*2)) {
    span.classList.add(rotationGroup[parseInt(Math.random() * rotationGroup.length, 10)]);
    // }
    // if (parseInt(Math.random()*2)) {
    span.classList.add(slopeGroup[parseInt(Math.random() * slopeGroup.length, 10)]);
    // }
    span.innerHTML = array[i];
    p.appendChild(span);
  }
  wordCounter.innerHTML = array.length;
}

function createArray() {
  deleteChildrenOfP();
  if (Math.abs(inputLetterText.value) === 0) {
    p.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const inputText = inputLetterText.value;
    const arrayLetterWords = inputText.split(' ');
    arrayInMysteriousLetter(arrayLetterWords);
  }
}

buttonGenerateLetter.addEventListener('click', createArray);
