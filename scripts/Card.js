/** @format */

import { initialCards } from "./data.js";
import {
  overlayTrue,
  overlayFalse,
  formAddDesative,
  closeFormDesative,
} from "./utils.js";

export default class Card {
  constructor(data, cardSelector, index) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._index = index;
  }

  _getTemplate() {
    const cardElement = document.createElement("div");
    cardElement.classList.add("places__container");

    const imageElement = document.createElement("img");
    imageElement.src = this._data.link;
    imageElement.alt = this._data.name;
    imageElement.classList.add("places__image");

    const deleteElement = document.createElement("div");
    deleteElement.classList.add("places__delete-image");

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("places__container_name");

    const nameElement = document.createElement("h1");
    nameElement.classList.add("places__title");
    nameElement.textContent = this._data.name;

    const likeImage = document.createElement("img");
    likeImage.classList.add("places__like-button");
    likeImage.src = "./styles/assets/like_button.svg";

    cardElement.appendChild(imageElement);
    cardElement.appendChild(nameContainer);
    cardElement.appendChild(deleteElement);
    nameContainer.appendChild(nameElement);
    nameContainer.appendChild(likeImage);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    return this._element;
  }

  _handleLikeClick() {
    const likeButton = this._element.querySelector(".places__like-button");
    if (likeButton.src.includes("like_button.svg")) {
      likeButton.src = "./styles/assets/like_button__active.svg";
    } else {
      likeButton.src = "./styles/assets/like_button.svg";
    }
  }

  _handleDeleteClick() {
    this._element
      .querySelector(".places__delete-image")
      .addEventListener("click", () => {
        this._element.remove();
        this._overlayTrue();
      });
  }

  _handleImageClick() {
    const clickedImageUrl = this._data.link;

    const enlargedImageContainer = document.querySelector(
      ".enlarged__image-container"
    );
    const enlargedImage =
      enlargedImageContainer.querySelector(".enlarged__image");
    const closeButtonEnlarged = document.querySelector(
      ".enlarged__close-button"
    );

    enlargedImage.src = clickedImageUrl;
    enlargedImage.classList.add("enlarged__image_active");
    enlargedImage.classList.remove("enlarged__image");
    enlargedImageContainer.classList.remove("enlarged__image-container");
    enlargedImageContainer.classList.add("enlarged__container_active");
    closeButtonEnlarged.classList.remove("enlarged__close-button");
    closeButtonEnlarged.classList.add("enlarged__close-button_active");

    overlayTrue();
  }

  _updateCardInDOM(index) {
    const cardContainers = document.querySelector(".places__container");
    const card = initialCards[index];
    const imageElement = cardContainers[index].querySelector(".places__image");
    const nameElement = cardContainers[index].querySelector(".places__title");

    imageElement.src = card.link;
    imageElement.alt = card.name;
    nameElement.textContent = card.name;
  }

  _submitAddCard() {
    let currentCardIndex = 0;

    const inputTitle = document.querySelector(".form-places__input_title");
    const inputUrl = document.querySelector(".form-places__input_url");

    if (currentCardIndex < this._initialCards.length) {
      this._initialCards[currentCardIndex] = {
        name: inputTitle.value,
        link: inputUrl.value,
      };

      inputTitle.value = " ";
      inputUrl.value = " ";

      this._updateCardInDOM(currentCardIndex);

      currentCardIndex++;
    }

    formAddDesative();
    closeFormDesative();
    overlayFalse();
  }

  _closeButtonEnlarged() {
    const enlargedImageContainer = document.querySelector(
      ".enlarged__image-container"
    );
    const enlargedImage =
      enlargedImageContainer.querySelector(".enlarged__image");
    const closeButtonEnlarged = document.querySelector(
      ".enlarged__close-button"
    );

    enlargedImageContainer.classList.remove("enlarged__image_active");
    enlargedImageContainer.classList.remove("enlarged__container_active");
    closeButtonEnlarged.classList.remove("enlarged__close-button_active");
    closeButtonEnlarged.classList.add("enlarged__close-button");
    enlargedImage.classList.remove("enlarged__image_active");
    enlargedImage.classList.add("enlarged__image");

    overlayFalse();
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".places__like-button");
    const deleteButton = this._element.querySelector(".places__delete-image");
    const imageElement = this._element.querySelector(".places__image");
    const formPlaces = this._element.querySelector(".form-places");
    const closeButtonEnlarged = this._element.querySelector(
      ".enlarged__close-button"
    );

    likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    imageElement.addEventListener("click", () => {
      this._handleImageClick();
    });

    formPlaces.addEventListener("click", (event) => {
      event.preventDefault();
      this._submitAddCard();
    });

    closeButtonEnlarged.addEventListener("click", () => {
      this._closeButtonEnlarged();
    });

    console.log("likeButton:", likeButton);
    console.log("deleteButton:", deleteButton);
    console.log("imageElement:", imageElement);
    console.log("formPlaces:", formPlaces);
    console.log("closeButtonEnlarged:", closeButtonEnlarged);
  }
}
