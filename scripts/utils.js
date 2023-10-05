/** @format */

const overlay = document.querySelector(".overlay");
const buttonChangeHandler = document.querySelector(".profile__square");
const closeButton = document.querySelector(".form__close-button");
const rectangleAdd = document.querySelector(".profile__rectangle");
const formAdd = document.querySelector(".form-places__container");
const formClose = document.querySelector(".form-places__close");
const enlargedImageContainer = document.querySelector(
  ".enlarged__image-container"
);
const enlargedImage = enlargedImageContainer.querySelector(".enlarged__image");
const closeButtonEnlarged = document.querySelector(".enlarged__close-button");
const form = document.querySelector(".form__container");

export const overlayTrue = () => {
  overlay.classList.remove("overlay");
  overlay.classList.add("overlay__active");
};
buttonChangeHandler.addEventListener("click", overlayTrue);
rectangleAdd.addEventListener("click", overlayTrue);

export const overlayFalse = () => {
  overlay.classList.remove("overlay__active");
  overlay.classList.add("overlay");
};

closeButton.addEventListener("click", overlayFalse);

const formTrue = () => {
  form.classList.remove("form__container");
  form.classList.add("form__container_active");
};
buttonChangeHandler.addEventListener("click", formTrue);

export const formFalse = () => {
  form.classList.remove("form__container_active");
  form.classList.add("form__container");
};

closeButton.addEventListener("click", formFalse);

export const closeButtonTrue = () => {
  closeButton.classList.remove("form__close-button");
  closeButton.classList.add("form__close-button_active");
};
buttonChangeHandler.addEventListener("click", closeButtonTrue);

export const closeButtonFalse = () => {
  closeButton.classList.remove("form__close-button_active");
  closeButton.classList.add("form__close-button");
};
closeButton.addEventListener("click", closeButtonFalse);

export const formAddActive = () => {
  formAdd.classList.remove("form-places__container");
  formAdd.classList.add("form-places__container_active");
};
rectangleAdd.addEventListener("click", formAddActive);

export const formAddDesative = () => {
  formAdd.classList.remove("form-places__container_active");
  formAdd.classList.add("form-places__container");
};

export const closeFormActive = () => {
  formClose.classList.remove("form-places__close");
  formClose.classList.add("form-places__close_active");
};
rectangleAdd.addEventListener("click", closeFormActive);

export const closeFormDesative = () => {
  formClose.classList.remove("form-places__close_active");
  formClose.classList.add("form-places__close");
};

formClose.addEventListener("click", overlayFalse);
formClose.addEventListener("click", formAddDesative);
formClose.addEventListener("click", closeFormDesative);

formClose.addEventListener("click", overlayFalse);
formClose.addEventListener("click", formAddDesative);
formClose.addEventListener("click", closeFormDesative);

export const closeByOverlay = () => {
  overlay.addEventListener("click", overlayFalse);
  overlay.addEventListener("click", formFalse);
  overlay.addEventListener("click", closeButtonFalse);
  overlay.addEventListener("click", overlayFalse);
  overlay.addEventListener("click", formAddDesative);
  overlay.addEventListener("click", closeFormDesative);
  overlay.addEventListener("click", function () {
    enlargedImageContainer.classList.remove("enlarged__image_active");
    enlargedImageContainer.classList.remove("enlarged__container_active");
    closeButtonEnlarged.classList.remove("enlarged__close-button_active");
    closeButtonEnlarged.classList.add("enlarged__close-button");
    enlargedImage.classList.remove("enlarged__image_active");
    enlargedImage.classList.add("enlarged__image");
  });
};

overlay.addEventListener("click", closeByOverlay);
