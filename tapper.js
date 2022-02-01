let tick = 0;

let tapPrev = 0;
let tapCurr = 0;

let timer = setInterval(() => {
    tick += 10;
}, 10)

const tap = () => {
    tapPrev = tapCurr;
    tapCurr = tick;
    let bps =  (tapCurr / 1000) - (tapPrev / 1000) //Beats per second
    let bpm = parseInt((1 / bps) * 60) //Beats per Minute
    let element = document.getElementById('bpm');
    element.innerText = bpm;
}