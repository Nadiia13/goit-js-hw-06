const fontRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

textRef.style.fontSize = fontRef.value + "px";

function changeFontRef(event) {
    textRef.style.fontSize = event.currentTarget.value + "px";
}

fontRef.addEventListener("input",changeFontRef)