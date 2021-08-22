const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', () => {
    colorsSwitch.start();
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
});
refs.stopBtn.addEventListener('click', () => {
    colorsSwitch.stop();
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
});

const colorsSwitch = {
    intervalId: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            changeBackground(colors);
        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }      
}

function changeBackground(color) {
    let currentColor = document.body.style.backgroundColor;
    do {
        currentColor = randomIntegerFromInterval(0, colors.length - 1);
    }
    while (currentColor === document.body.style.backgroundColor);
 
  document.body.style.backgroundColor = color[currentColor];
}
