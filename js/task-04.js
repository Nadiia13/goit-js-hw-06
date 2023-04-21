let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document .querySelector('[data-action="increment"]');
const span = document. getElementById ('value');

decrement.addEventListener('click', onRemoveNumber);
increment.addEventListener('click', onAddNumber);

function onAddNumber() {
counterValue += 1;
span. textContent = counterValue;
}
function onRemoveNumber() {
    counterValue -= 1;
    span.textContent = counterValue;
}