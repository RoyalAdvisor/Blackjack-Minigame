const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const winConditions = ["Draw another card?", "You have won!", "You have lost!"];

const randomNumber = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let item = arr[randomIndex];
  return item;
};

let firstCard = randomNumber(numbers);
let secondCard = randomNumber(numbers);
let newCard = randomNumber(numbers);
let hasWon = false;
let hasLost = false;

let cards = document.querySelector(".cards");
let sum = document.querySelector(".sum");
let result = document.querySelector(".results");

const renderGame = () => {
  cards.textContent = firstCard + " " + secondCard;
  sum.textContent += firstCard + secondCard;
  if (sum.textContent <= 20) return (result.textContent = winConditions[0]);
};

const drawCard = () => {
  cards.textContent += " " + newCard;
  let newResult = (sum.textContent = Math.floor(
    Number(sum.textContent) + newCard
  ));
  checkConditions(newResult);
};

const checkConditions = (newResult) => {
  if (newResult <= 20) {
    return (result.textContent = winConditions[0]);
  } else if (newResult === 21) {
    hasWon = true;
    return (result.textContent = winConditions[1]);
  } else {
    hasLost = true;
    return (result.textContent = winConditions[2]);
  }
};

const refresh = () => {
  location.reload();
};
