/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suits = ["diamonds", "spades", "clubs", "hearts"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
