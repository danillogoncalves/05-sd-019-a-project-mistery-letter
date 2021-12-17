const buttonGenerateLetter = document.querySelector('#criar-carta');
const inputLetterText = document.querySelector('#carta-texto');

function createArray() {
    deleteChildrenOfP();
    if (Math.abs(inputLetterText.value) === 0) {
        document.querySelector('#carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
        let inputText = inputLetterText.value;
        let arrayLetterWords = inputText.split(' ');
        arrayInMysteriousLetter(arrayLetterWords);
    }
}

function deleteChildrenOfP () {
    const p = document.querySelector('#carta-gerada');
    if (p.childNodes.length) {
        for (let i = p.childNodes.length -1; i >= 0; i -= 1) {
            p.removeChild(p.childNodes[i]);
        }
    }


}

function arrayInMysteriousLetter(array) {
    const p = document.querySelector('#carta-gerada');
    for (let i = 0; i < array.length; i += 1) {
        const span = document.createElement('span');
        span.innerHTML = array[i];
        p.appendChild(span);
    }
}

buttonGenerateLetter.addEventListener('click', createArray);