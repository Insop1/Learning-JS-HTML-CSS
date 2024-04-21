import * as utils from './utility.js';

let fly = document.getElementById("fly");
fly.src = "resources/images/B_Pirmal_Aspid.webp";

fly.style.left = utils.randomNum(0, window.innerWidth - 100) + 'px';
fly.style.top = utils.randomNum(0, window.innerHeight - 100) + 'px';

fly.addEventListener("click", flyClickHandler)

function flyClickHandler(event){
    const windowW = window.innerWidth - 100;
    const windowH = window.innerHeight - 100;
    
    if(utils.probability(10)) {
        let audio = new Audio(`resources/audio/Cartoon Splat sound effect.mp3`);
        audio.play();

        fly.style.transform = "rotate(180deg)";
        fly.style.height = parseFloat(window.getComputedStyle(fly).getPropertyValue('height')) / 2 + "px";
        fly.removeEventListener("click", flyClickHandler);

        console.log();

        fly.style.cursor = "default"

        setTimeout(function() {
            fly.style.transition = "5s";
            fly.style.opacity = 0;
        }, 3000);

        setTimeout(function() {
            fly.style.transition = "5s";
            fly.style.opacity = 0;
        }, fly.style.transition * 1000 + 3000);
    }
    else {
        let audio = new Audio(`resources/audio/Buzzing Fly - Sound Effect.mp3`);
        audio.currentTime = 3.5;
        audio.play();

        let widthN = utils.randomNum(0, windowW);
        let heightN = utils.randomNum(0, windowH);

        let widthDelta = widthN - parseFloat(fly.style.left); 

        fly.style.left = + widthN + 'px';
        fly.style.top = heightN + 'px';  

        fly.style.transform = widthDelta > 0 ? "scaleX(-1)" : "scaleX(1)";
        console.log(fly.style.transform);
    }
}