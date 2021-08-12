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
});
refs.stopBtn.addEventListener('click', () => {
    colorsSwitch.stop();
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
  const currentColor = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = color[currentColor];
}
