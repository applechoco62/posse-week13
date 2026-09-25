import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>カウンター</h1>
  <p id="count">0</p>
  <div>
    <button id="decrement">−</button>
    <button id="increment">＋</button>
    <button id="reset">リセット</button>
  </div>
`;

const countEl = document.querySelector('#count');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');
let count = 0;

function render() {
  countEl.textContent = count;
}

incrementBtn.addEventListener('click', () => {
  count += 1;
  render();
});

decrementBtn.addEventListener('click', () => {
  count -= 1;
  render();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  render();
});