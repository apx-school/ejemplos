const counterEl = document.querySelector(".counter");

document.querySelector(".button").addEventListener("click", () => {
  counterEl.innerHTML = parseInt(counterEl.innerText) + 1;
});
