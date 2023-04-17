let text = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "+",
  "!",
  "%",
  "/",
  "=",
  "(",
  ")",
  "<",
  ">",
  "#",
  "&",
  "@",
  "{",
  "}",
  ";",
  ">",
  "*",
  "[",
  "]",
  "_",
  "-",
  ":",
  "?",
  ",",
  ".",
];

const lengthEl = document.getElementById("length-el");
const passwordsContainer = document.getElementById("passwords-container");
const genBtn = document.getElementById("gen-Btn");
let password;

function generatePassword() {
  const passwordLength = lengthEl.value;
  password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomChar = text[Math.floor(Math.random() * text.length)];
    password += randomChar;
  }
  return password;
}
function getPasswordArray() {
  return new Array(4).fill("0").map(function () {
    return generatePassword();
  });
}
function getPasswordHtml() {
  return getPasswordArray().map(
    (item) => ` <input autocomplete="off" type="text" value="${item}" />`
  );
}

function render() {
  document.querySelector(".passwords").classList.remove("dots");
  passwordsContainer.innerHTML = getPasswordHtml();
  lengthEl.value = "";
}

genBtn.addEventListener("click", render);

}
