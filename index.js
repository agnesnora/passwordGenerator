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

function length() {
  let lengthEl = document.getElementById("length-el");
}
function generate() {
  let pwEl1 = document.getElementById("password1-el");
  pwEl1.value = getPassword();
  let pwEl2 = document.getElementById("password2-el");
  pwEl2.value = getPassword();
  let pwEl3 = document.getElementById("password3-el");
  pwEl3.value = getPassword();
  let pwEl4 = document.getElementById("password4-el");
  pwEl4.value = getPassword();
  document.querySelector(".passwords").classList.remove("dots");
}

function getPassword() {
  let password = "";
  let passwordLength = 0;
  passwordLength = document.getElementById("length-el").value;

  for (let i = 0; i < passwordLength; i++) {
    let randomChar = text[Math.floor(Math.random() * text.length)];

    password += randomChar;
  }
  return password;
}
