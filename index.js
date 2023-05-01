import Key from "./Key.js";
import languages from "./languages/lang.js";

const BODY = document.querySelector("body"); 1

const INPUT = document.createElement("textarea");
let caps = Boolean();
const KEYBOARD = document.createElement("section");
const KEY = document.createElement("div");



INPUT.classList.add("input_area");
KEYBOARD.classList.add("keyboard");
KEY.classList.add("keyboard__key");

BODY.appendChild(INPUT);
BODY.appendChild(KEYBOARD);
KEYBOARD.appendChild(KEY);



const KeyContainer = [];

for (let i = 0; i < languages.en.length; i++) {
  let Btn = document.createElement("div");
  Btn.classList.add("keyboard__key");

  let BtnTitle = document.createElement("div");
  BtnTitle.classList.add("key-title");

  const KEY = new Key(languages.en[i]);
  BtnTitle.innerHTML = KEY.shift;

  let BtnSubtitle = document.createElement("div");
  BtnSubtitle.classList.add("key-subtitle");
  BtnSubtitle.innerHTML = KEY.small;

  Btn.dataset.code = KEY.code;
  Btn.id = KEY.code;

  Btn.appendChild(BtnTitle);
  Btn.appendChild(BtnSubtitle);
  KEYBOARD.appendChild(Btn);
  KeyContainer.push(Btn);
}

// console.log(languages.en);



// const keyboardText = (el) => {
//   userInput += el.target.innerHTML
//   INPUT.innerHTML = userInput;
// }
// let userInput = "";




// window.addEventListener("keydown", KeyboardEvent => {

//   KeyboardEvent.preventDefault();
//   // KeyboardEvent.stopImmediatePropagation();
//   // let focusPos = INPUT.selectionStart;

//   if (KeyboardEvent.key === "Backspace") {
//     INPUT.innerHTML = INPUT.innerHTML.slice(0, -1);
//     INPUT.selectionStart += 1;
//   } else if (KeyboardEvent.key === "Enter") {
//     INPUT.innerHTML = INPUT.innerHTML + "\n";
//   } else if (KeyboardEvent.key === "Space") {
//     INPUT.innerHTML = INPUT.innerHTML + " ";
//   } else if (KeyboardEvent.key === "ArrowLeft") {
//     // console.log("ArrowLeft");
//     console.log(INPUT.selectionStart);
//     INPUT.selectionStart -= 1;
//     // INPUT.selectionDirection
//     console.log(INPUT.selectionDirection);
//   } else if (KeyboardEvent.key === "CapsLock") {
//     document.querySelector()
//     // languages.en.find((el) => {
//     //   if (el.code === KeyboardEvent.code) {
//     //     return INPUT.innerHTML += el.small;
//     //   }
//   } else {
//     languages.en.find((el) => {
//       if (el.code === KeyboardEvent.code) {
//         return INPUT.innerHTML += el.small;
//       }
//     })
//     // INPUT.selectionStart++;
//   }
//   // INPUT.focus();
// })

// KeyContainer.forEach((key, i ) => {
//     if  (KeyboardEvent.code === key.code)
//       KEYBOARD.childNodes[i].classList.add("active");
// })

// KEYBOARD.addEventListener("click", (event) => {
//   if (event.target.innerText === "Backspace") {
//     INPUT.innerHTML = INPUT.innerHTML.slice(0, -1);
//     INPUT.selectionStart -= 1;
//   } else if (event.target.innerText === "Enter") {
//     INPUT.innerHTML = INPUT.innerHTML + "\n";
//     INPUT.selectionStart += 1;
//   } else if (event.target.innerText === "Space") {
//     INPUT.innerHTML = INPUT.innerHTML + " ";
//     INPUT.selectionStart += 1;
//   } else if (event.target.innerText === "←") {
//     // console.log("ArrowLeft");
//     console.log(INPUT.selectionStart);
//     INPUT.selectionStart -= 1;
//     // INPUT.selectionDirection
//     console.log(INPUT.selectionDirection);
//   } else {
//     //  console.log(event.target.innerText);
//     if (event.target.dataset.code === "undefined") {
//       INPUT.innerHTML += "";
//     } else {
//       // if (event.defaultPrevented) return;
//       //  console.log(event.target);
//       if (event.target.closest(".keyboard__key")) {
//         INPUT.innerHTML += event.target.lastChild.innerHTML;
//         INPUT.selectionStart++;
//       }
//       // focusPos = INPUT.selectionStar;
//       // console.log(INPUT.selectionStart);
//     }
//   }
//   INPUT.focus();
// })

KEYBOARD.addEventListener("mousedown", userInput);
KEYBOARD.addEventListener("mouseup", disabled);
document.addEventListener("keydown", userInput);
document.addEventListener("keyup", disabled);

function userInput(event) {
  // event.preventDefault();

  const { code, target } = event;

  console.log(code);
  // console.log(target.dataset.code);
  // const keyCode = KeyContainer.find((el) => el.code === code && el.code === target.dataset.code);

  // console.log(event.type);

  if (event.code) {
    const activEl = document.getElementById(event.code);
    activEl.classList.add("active");
  }

  if (target.closest(".keyboard__key") || event.type === "mousedown") {
    event.preventDefault();
    console.log("mousedown")
    const activEl = document.getElementById(target.dataset.code);
    activEl.classList.add("active");
  }

  if (event.target.innerText === "Backspace" || code === "Backspace") {
    INPUT.innerHTML = INPUT.innerHTML.slice(0, -1);
    INPUT.selectionStart -= 1;
  } else if (event.target.innerText === "Enter" || code === "Enter") {
    INPUT.innerHTML = INPUT.innerHTML + "\n";
    INPUT.selectionStart += 1;
  } else if (event.target.innerText === "Space" || code === " ") {
    INPUT.innerHTML = INPUT.innerHTML + " ";
    INPUT.selectionStart += 1;
  } else if (event.target.innerText === "←" || code === "←") {
    // console.log("ArrowLeft");
    console.log(INPUT.selectionStart);
    INPUT.selectionStart -= 1;
    // INPUT.selectionDirection
    console.log(INPUT.selectionDirection);
  } else {
    //  console.log(event.target.innerText);
    // if (event.target.dataset.code === "undefined") {
    //   INPUT.innerHTML += "";
    // } else {
    // if (event.defaultPrevented) return;
    //  console.log(event.target);
    if (event.target.closest(".keyboard__key")) {
      // console.log(event)
      // languages.en.find((el) => {
      //       if (el.code === KeyboardEvent.code) {
      //         return INPUT.innerHTML += el.small;
      //       }
      //     })
      INPUT.innerHTML += event.target.lastChild.innerHTML;
      INPUT.selectionStart++;
    } else {
      languages.en.find((el) => {
        if (el.code === code) {
          return INPUT.innerHTML += el.small;
        }
      })
    }
    // focusPos = INPUT.selectionStar;
    // console.log(INPUT.selectionStart);
    // }
  }
}

function disabled(event) {
  event.preventDefault();
  const { code, target } = event;
  if (code) {
    const elRemuveActive = document.getElementById(code);
    elRemuveActive.classList.remove("active");
  }
  if (target.dataset.code) {
    console.log("mouseUp")
    const activEl = document.getElementById(target.dataset.code);
    activEl.classList.remove("active");
  }
}
