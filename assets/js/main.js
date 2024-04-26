// Start A Definations A Varibals

let count = document.querySelector(".count");
let desrees = document.querySelector(".desrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let buttons = document.querySelectorAll(".bouttns button");

let numberCount = 0;

// Start a Desrees btn
desrees.addEventListener("click", function () {
  numberCount--;
  count.style.color = "red";
  count.textContent = numberCount;
});

// Start a reset btn
reset.addEventListener("click", function () {
  count.style.color = "#000";
  count.textContent = 0;
  numberCount = 0;
});

// Start a increase btn
increase.addEventListener("click", function () {
  numberCount++;
  count.style.color = "green";
  count.textContent = numberCount;
});
