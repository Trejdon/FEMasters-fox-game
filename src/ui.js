// helper functions for modifying the DOM

export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

export const modScene = function modScene(scene) {
  document.querySelector(".game").className = `game ${scene}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};

export const writeModal = function writeModal(text = "") {
  document.querySelector(
    ".modal"
  ).innerHTML = `<div class="modal-inner">${text}</div>`;
};
