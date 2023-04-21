const categories = document.querySelectorAll(".item");
console.log(`Number of categories:`, categories.length);

const menuItem = document.querySelector(".item");

const titleItem = menuItem.firstElementChild.textContent;

const totalItem = menuItem.lastElementChild.childElementCount;


categories.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.childElementCount}`)
});