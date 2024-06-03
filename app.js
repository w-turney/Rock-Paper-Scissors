const flexContainer = document.querySelector('.flex-container')
const resultContainer = document.querySelector('.result-container')
const youChoice = document.getElementById('you-choice')
const houseChoice = document.getElementById('house-choice')
const choiceButtons = document.querySelectorAll('.choice')
const resultSpan = document.getElementById('result-span')
const scoreSpan = document.getElementById('score')
const replayButton = document.getElementById('replay')
const rulesContainer = document.querySelector('.rules-container');
const rulesButton =document.getElementById('rules')
let globalScore = 0;

function win() {
    resultSpan.textContent = 'YOU WIN!'
    globalScore++
    scoreSpan.textContent = globalScore
}

function lose() {
    resultSpan.textContent = 'YOU LOSE!'
    globalScore--
    scoreSpan.textContent = globalScore
}

function draw() {
    resultSpan.textContent = 'DRAW'
}

function compare(arr = choicesArray) {
    if (arr[0] === arr[1]) {
        draw()
    } else
    if (arr[0] === 'rock') {
        if (arr[1] === 'paper') {
            lose()
        } else {
            win()
        }
    } else
    if (arr[0] === 'paper') {
        if (arr[1] === 'scissors') {
            lose()
        } else {
            win()
        }
    } else
    if (arr[0] === 'scissors') {
        if (arr[1] === 'rock') {
            lose()
        } else {
            win()
        }
    }
}

function toggle() {
    flexContainer.classList.toggle('hide');
    resultContainer.classList.toggle('hide');
    rulesButton.classList.toggle('hide');
}

function play(event) {
    const choicesArray = [];
    toggle()
    youChoice.innerHTML = event.target.outerHTML;
    houseChoice.innerHTML = choiceButtons[Math.floor(Math.random()*3)].outerHTML;
    choicesArray.push(youChoice.children[0].id, houseChoice.children[0].id);
    compare(choicesArray);
}

function replay() {
    toggle()
}

function rules() {
    flexContainer.classList.toggle('hide')
    rulesContainer.classList.toggle('hide')
}

choiceButtons.forEach(choice => choice.addEventListener('click', play))

replayButton.addEventListener('click', replay)

rulesButton.addEventListener('click', rules)