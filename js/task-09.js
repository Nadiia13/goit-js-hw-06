const btnChange = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

btnChange.addEventListener("click", onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  
  body.style.backgroundColor = color;
  span.style.color = color;
  span.style.backgroundColor = body.style.backgroundColor;
  span.textContent = color;
        function getRandomHexColor() {
                 return `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, 0)}`;
                }
}