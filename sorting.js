function swap(el1, el2) {
  let temp = el1.style.height;

  let temptext = el1.innerText;
  el1.innerText = el2.innerText;
  el2.innerText = temptext;

  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

let arr = [23, 10, 7, 9, 8, 12, 18, 15, 13, 6, 3, 5, 7, 3, 4];
const arrayContainer = document.querySelector("#sortingContainer");
const sortbtn = document.querySelector("#playbtn");
const shufflebtn = document.querySelector("#shufflebtn");

function CreatingArray() {
  deleteChild();
  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${arr[i] * 10}px`;
    bar.classList.add("bar");
    bar.classList.add(`barNo${i}`);
    bar.classList.add("flex-item");
    bar.innerText = arr[i];
    arrayContainer.appendChild(bar);
  }
}

function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}
let hasPressedStop = new Boolean(false);

async function bubblesort() {
  CreatingArray();
  const ele = document.querySelectorAll(".bar");
  console.log(ele);
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      if (hasPressedStop == true) {
        return;
      }
      ele[j].style.background = "cyan";
      ele[j + 1].style.background = "cyan";

      await delayTime(200);

      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        swap(ele[j], ele[j + 1]);
      }

      ele[j].style.background = "#e43f5a";
      ele[j + 1].style.background = "#e43f5a";
    }
    ele[ele.length - 1 - i].style.background = "green";
  }
  ele[0].style.background = "green";
}

function deleteChild() {
  arrayContainer.innerHTML = "";
}

function shuffle(array) {
  let shuffledarr = array.slice().sort(() => Math.random() - 0.5);
  arr = shuffledarr;
  CreatingArray();
}

document.addEventListener("DOMContentLoaded", () => {
  shuffle(arr);
});

sortbtn.addEventListener("click", () => {
  deleteChild();
  bubblesort();
});

shufflebtn.addEventListener("click", () => {
  deleteChild();
  shuffle(arr);
  CreatingArray();
});
