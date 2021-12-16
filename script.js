const buttonGenerateLetter = document.querySelector('#criar-carta');
const inputLetterText = document.querySelector('#carta-texto');

function createArray() {
    deleteChildrenOfP();
    let inputText = inputLetterText.value;
    let arrayLetterWords = inputText.split(' ');
    arrayInMysteriousLetter(arrayLetterWords);
}

function deleteChildrenOfP () {
    const p = document.querySelector('#carta-gerada');
    if (p.children.length) {
        for (let i = p.children.length -1; i >= 0; i -= 1) {
            p.removeChild(p.children[i]);
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