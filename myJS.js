"use strict";

const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

const btn = document.getElementById("btn");
const captchaText = document.getElementById("captcha__text");
const input = document.getElementById("input");

let captcha = "";

const allChars = numbers.concat(upperCaseLetters, lowerCaseLetters);

const getRandom = () => {
  return allChars[Math.floor(Math.random() * allChars.length)];
};

const createCaptcha = () => {
  for (let i = 0; i < 6; i++) {
    captcha += getRandom();
  }
  captchaText.innerText = captcha;
};

createCaptcha();

input.addEventListener("input", function (e) {
  const myInput = this.value;

  if (myInput === captchaText.innerText) {
    this.classList.add("ring-green-600");
    btn.classList.add("bg-green-600", "cursor-pointer");
  } else {
    this.classList.remove("ring-green-600");
    btn.classList.remove("bg-green-600", "cursor-pointer");
  }

  if (myInput.length === 6 && myInput !== captchaText.innerText) {
    this.classList.add("ring-red-600");
  } else {
    this.classList.remove("ring-red-600");
  }
});

input.addEventListener("keypress", function (e) {
  if (e.target.value.length >= 6) {
    e.preventDefault();
  }
});
