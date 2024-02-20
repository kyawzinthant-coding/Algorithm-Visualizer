let arr = [23, 10, 7, 9, 8, 12, 18, 15, 13, 6, 3, 5, 7, 3, 4];

const arrayContainer = document.querySelector("#sortingContainer");
const bubblesortBtn = document.querySelector("#bubblesort");
const shuffleBtn = document.querySelector("#shufflebtn");
const sortingTitle = document.querySelector("#sortingtitle");
let hasPressedStop = false;
let bars = [];

function swap(el1, el2) {
  let tempHeight = el1.style.height;
  let tempText = el1.innerText;

  el1.style.height = el2.style.height;
  el1.innerText = el2.innerText;

  el2.style.height = tempHeight;
  el2.innerText = tempText;
}

function createBars(arr) {
  arrayContainer.innerHTML = "";
  bars = [];
  arr.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.style.height = `${value * 10}px`;
    bar.classList.add("bar");
    bar.classList.add(`barNo${index}`);
    bar.classList.add("flex-item");
    bar.innerText = value;
    bars.push(bar);
    arrayContainer.appendChild(bar);
  });
}

function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

async function bubbleSort() {
  bubblesortBtn.disabled = true;
  createBars(arr);

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      if (hasPressedStop) return;

      bars[j].style.background = "cyan";
      bars[j + 1].style.background = "cyan";
      await delayTime(100);

      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        swap(bars[j], bars[j + 1]);
      }

      bars[j].style.background = "#e43f5a";
      bars[j + 1].style.background = "#e43f5a";
    }
    bars[bars.length - 1 - i].style.background = "green";
  }
  bars[0].style.background = "green";
  bubblesortBtn.disabled = false;
}

function shuffleArray(array) {
  let shuffledArray = array.slice().sort(() => Math.random() - 0.5);
  arr = shuffledArray;
  createBars(arr);
}

function stopSorting() {
  hasPressedStop = true;
}

function resetSorting() {
  hasPressedStop = false;
}

bubblesortBtn.addEventListener("click", () => {
  resetSorting();
  sortingTitle.innerText = "Bubble Sort Algorithm";
  bubbleSort();
});

shuffleBtn.addEventListener("click", () => {
  resetSorting();
  shuffleArray(arr);
});

createBars(arr);
