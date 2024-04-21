import * as utils from "./utility.js"
import {flyClickHandler, move} from "./fly.js"

document.getElementById("alertButton").addEventListener("click", function(event) {
    window.alert("alert");
});

document.getElementById("addPrimalAspid").addEventListener("click", function(event) {
    if(document.getElementsByClassName("fly").length > 10) {
        return 0;
    }

    let divFly = document.createElement("div");
    
    divFly.classList.add("fly");
    let fly = document.createElement("img");
    
    fly.src = "resources/images/B_Pirmal_Aspid.webp";
    
    fly.style.left = utils.randomNum(0, window.innerWidth - 100) + 'px';
    fly.style.top = utils.randomNum(0, window.innerHeight - 100) + 'px';
    fly.style.transform = `scaleX(${utils.randomNorm()})`

    fly.autoMove = setInterval(() => move(fly), 3000);
    
    fly.addEventListener("click", flyClickHandler)
    
    divFly.appendChild(fly);
    document.getElementById("flyContainer").appendChild(divFly);
});

