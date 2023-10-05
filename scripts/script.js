/** @format */

import Card from "./Card.js";
import { overlayTrue } from "./utils.js";
import { overlayFalse } from "./utils.js";
import { closeByOverlay } from "./utils.js";

const placesContainer = document.querySelector(".places__grid");
const cardImage = document.querySelectorAll(".places__image");
const enlargedImageContainer = document.querySelector(
  ".enlarged__image-container"
);
const enlargedImage = enlargedImageContainer.querySelector(".enlarged__image");
const closeButtonEnlarged = document.querySelector(".enlarged__close-button");

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

initialCards.forEach((cardData, index) => {
  const card = new Card(cardData, ".places__container", index, overlayTrue);
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

closeButtonEnlarged.addEventListener("click", function () {
  enlargedImageContainer.classList.remove("enlarged__image_active");
  enlargedImageContainer.classList.remove("enlarged__container_active");
  closeButtonEnlarged.classList.remove("enlarged__close-button_active");
  closeButtonEnlarged.classList.add("enlarged__close-button");
  enlargedImage.classList.remove("enlarged__image_active");
  enlargedImage.classList.add("enlarged__image");

  overlayFalse();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    closeByOverlay();
  }
});
