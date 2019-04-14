const bags = document.querySelectorAll('.bag');
const playerScore = document.querySelector('.score');
const monies = document.querySelectorAll('.money');
let lastBag;
let timeUp = false;
let score = 0; 
 


function popUpTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomBag(bags) {
    const idx = Math.floor(Math.random() * bags.length);
    const bag = bags[idx];
    if (bag === lastBag) {
        console.log("repeated bag");
        return randomBag(bags);
    }
    lastBag = bag;
    return bag;
}

function popUp() {
    const time = popUpTime(200, 1000);
    const bag = randomBag(bags);
    bag.classList.add('up');
    setTimeout(() => {
        bag.classList.remove('up');
        if (!timeUp) popUp();
    }, time);
}

function beginGame() {
    playerScore.textContent = 0;
    timeUp = false;
    score = 0; 
    popUp();
    setTimeout(() => timeUp = true, 10000)
}

function clickClick(e) {
   if(!e.isTrusted) return;
   score++;
   this.classList.remove('up');
   playerScore.textContent = score; 
}

monies.forEach(money => money.addEventListener('click', clickClick));