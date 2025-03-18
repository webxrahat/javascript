// console.log("Hello World");

window.onload = () => {
 main();
};

function main() {
 const color = document.getElementById("root");
 const btn = document.getElementById("btn");

 btn.addEventListener("click", function () {
  color.style.backgroundColor = generateColor();
 });
}

function generateColor() {
 const red = Math.floor(Math.random() * 255);
 const blue = Math.floor(Math.random() * 255);
 const green = Math.floor(Math.random() * 255);
 return `rgb(${red}, ${green}, ${blue})`;
}
