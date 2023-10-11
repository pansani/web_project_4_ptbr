/** @format */

import Card from "./Card.js";
import { closeByOverlay } from "./utils.js";
import { FormValidator } from "./FormValidator.js";

export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const placesContainer = document.querySelector(".places__grid");

initialCards.forEach((cardData, index) => {
  const card = new Card(cardData, index);
  const cardElement = card.generateCard();
  placesContainer.appendChild(cardElement);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    closeByOverlay();
  }
});

const configProfile = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__input_submit",
  inactiveButtonClass: "form__input_submit_disabled",
  inputErrorClass: "form__message",
  errorClass: "form__error_visible",
};

const configPlaces = {
  formSelector: ".form-places",
  inputSelector: ".form-places__input",
  submitButtonSelector: ".form-places__submit",
  inactiveButtonClass: "form-places__submit_disabled",
  inputErrorClass: "form-places__message",
  errorClass: "form-places__error_visible",
};

const profileForm = document.querySelector(".form");
const placesForm = document.querySelector(".form-places");

const profileFormValidator = new FormValidator(configProfile, profileForm);
profileFormValidator.enableValidation();

const placesFormValidator = new FormValidator(configPlaces, placesForm);
placesFormValidator.enableValidation();
