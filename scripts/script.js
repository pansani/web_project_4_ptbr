/** @format */

import Card from "./Card.js";
import { overlayTrue, closeByOverlay } from "./utils.js";
import { initialCards } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");

  const placesContainer = document.querySelector(".places__grid");
  const cardImage = document.querySelectorAll(".places__image");
  const enlargedImageContainer = document.querySelector(
    ".enlarged__image-container"
  );
  const enlargedImage =
    enlargedImageContainer.querySelector(".enlarged__image");
  const closeButtonEnlarged = document.querySelector(".enlarged__close-button");

  initialCards.forEach((cardData, index) => {
    const card = new Card(cardData, index);
    const cardElement = card.generateCard();
    placesContainer.appendChild(cardElement);

    console.log("teste");
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
});
