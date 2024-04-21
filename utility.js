

export function randomNum(min, max) {
    return Math.floor(Math.random() * (max + min));
}

export function randomNumFloat(min, max) {
    return Math.random() * (max + min);
}

export function randomNorm() {
    return probability(50) ? -1 : 1;
}

export function probability(percent) {
    percent /= 100;
    let num = randomNumFloat(0, 1.0);

    return num <= percent;
}