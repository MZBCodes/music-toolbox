const audioContext = new AudioContext();
console.log(audioContext);

const osc = this.audioContext.createOscillator();

osc.frequency.value = 800;

osc.connect(audioContext.destination);

osc.start(audioContext.currentTime + 1);
osc.stop(audioContext.currentTime + 1.03);
let bpm;
let active;
setInterval(console.log("hey"), 1000)

const play = (bpm) => {
    let active = true;
}