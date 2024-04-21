import * as utils from './utility.js';

let flies = document.getElementsByClassName("fly");

for(let divFly of flies) {
    let fly = divFly.firstElementChild;
    fly.src = "resources/images/B_Pirmal_Aspid.webp";
    
    fly.style.left = utils.randomNum(0, window.innerWidth - 100) + 'px';
    fly.style.top = utils.randomNum(0, window.innerHeight - 100) + 'px';
    fly.style.transform = `scaleX(${utils.randomNorm()})`;
    
    fly.autoMove = setInterval(() => move(fly), utils.randomNum(2500, 3000));

    fly.addEventListener("click", flyClickHandler); 
}

export function flyClickHandler(event) {
    const fly = event.target;
    const dieChance = 33;
    
    if(utils.probability(dieChance)) {
        clearInterval(fly.autoMove);
        kill(fly);
    }
    else {
        move(fly);
        clearInterval(fly.autoMove);
        fly.autoMove = setInterval(() => move(fly), 3000);
    }
}

function kill(fly) {
    let audio = new Audio(`resources/audio/Cartoon Splat sound effect.mp3`);
    audio.play();

    fly.style.transform = "rotate(180deg)";
    fly.style.height = parseFloat(window.getComputedStyle(fly).getPropertyValue('height')) / 2 + "px";
    fly.removeEventListener("click", flyClickHandler);

    fly.style.cursor = "default";

    setTimeout(function() {
        fly.style.transition = "5s";
        fly.style.opacity = 0;
    }, 3000);

    setTimeout(function() {
        fly.parentNode.remove();
    }, 10000);
}

export function move(fly) {
    const windowW = window.innerWidth - 100;
    const windowH = window.innerHeight - 100;

    let audio = new Audio(`resources/audio/Buzzing Fly - Sound Effect.mp3`);
    audio.currentTime = 3.5;
    audio.play();

    let widthN = utils.randomNum(0, windowW);
    let heightN = utils.randomNum(0, windowH);

    let widthDelta = widthN - parseFloat(fly.style.left); 

    fly.style.left = widthN + 'px';
    fly.style.top = heightN + 'px';  

    fly.style.transform = widthDelta > 0 ? "scaleX(-1)" : "scaleX(1)";
    console.log(fly.style.transform);
}

