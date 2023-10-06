/** @format */

import Card from "./Card.js";
import { overlayTrue, closeByOverlay } from "./utils.js";

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
const cardImage = document.querySelectorAll(".places__image");
const enlargedImageContainer = document.querySelector(
  ".enlarged__image-container"
);
const enlargedImage = enlargedImageContainer.querySelector(".enlarged__image");
const closeButtonEnlarged = document.querySelector(".enlarged__close-button");

initialCards.forEach((cardData, index) => {
  const card = new Card(cardData, index);
  const cardElement = card.generateCard();
  placesContainer.appendChild(cardElement);
});

cardImage.forEach((imageElement, index) => {
  imageElement.addEventListener("click", function () {
    const clickedImageUrl = initialCards[index].link;

    enlargedImage.src = clickedImageUrl;
    enlargedImage.classList.add("enlarged__image_active");
    enlargedImage.classList.remove("enlarged__image");
    enlargedImageContainer.classList.remove("enlarged__image-container");
    enlargedImageContainer.classList.add("enlarged__container_active");
    closeButtonEnlarged.classList.remove("enlarged__close-button");
    closeButtonEnlarged.classList.add("enlarged__close-button_active");

    overlayTrue();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    closeByOverlay();
  }
});
