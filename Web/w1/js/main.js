// js/main.js
console.log("Week 01 lab script loaded");

const message = document.getElementById("message");
const button = document.getElementById("go");

button.addEventListener("click", function () {
  message.textContent = "Button works. Hello from JavaScript!";
  console.log("Button clicked");
});
