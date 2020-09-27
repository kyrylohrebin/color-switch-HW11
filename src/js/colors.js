const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

refs.start.addEventListener('click', startSwitch);
refs.stop.addEventListener('click', stoptSwitch);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor() {
  const switcher = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(switcher);
  document.body.style.backgroundColor = switcher;
}

let timerId;

function startSwitch() {
  timerId = setInterval(() => {
    return setRandomColor();
  }, 1000);
}

function stoptSwitch() {
  clearInterval(timerId);
}