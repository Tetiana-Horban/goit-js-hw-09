function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let timerId = null;
buttonStop.setAttribute('disabled', true);

buttonStart.addEventListener('click', startChangeBagroundColor);
buttonStop.addEventListener('click', stopChangeBagroundColor);

function startChangeBagroundColor() {
  buttonStart.setAttribute('disabled', true);
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    buttonStop.removeAttribute('disabled');
  }, 1000);
}
function stopChangeBagroundColor() {
  clearInterval(timerId);
  buttonStop.setAttribute('disabled', true);
  buttonStart.removeAttribute('disabled');
}
