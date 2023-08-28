/** @format */

const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form__container");
const buttonChangeHandler = document.querySelector(".profile__square");
const closeButton = document.querySelector(".form__close-button");
const inputName = document.querySelector(".form__input_name");
const inputSubtitle = document.querySelector(".form__input_subtitle");
const inputSubmit = document.querySelector(".form__input_submit");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const likeButton = document.querySelector(".places__like-button");

const formTrue = () => {
  form.classList.remove("form__container");
  form.classList.add("form__container_active");
};
buttonChangeHandler.addEventListener("click", formTrue);

const closeButtonTrue = () => {
  closeButton.classList.remove("form__close-button");
  closeButton.classList.add("form__close-button_active");
};
buttonChangeHandler.addEventListener("click", closeButtonTrue);

const overlayTrue = () => {
  overlay.classList.remove("overlay");
  overlay.classList.add("overlay__active");
};
buttonChangeHandler.addEventListener("click", overlayTrue);

const formFalse = () => {
  form.classList.remove("form__container_active");
  form.classList.add("form__container");
};

const closeButtonFalse = () => {
  closeButton.classList.remove("form__close-button_active");
  closeButton.classList.add("form__close-button");
};

const overlayFalse = () => {
  overlay.classList.remove("overlay__active");
  overlay.classList.add("overlay");
};

closeButton.addEventListener("click", overlayFalse);
closeButton.addEventListener("click", formFalse);
closeButton.addEventListener("click", closeButtonFalse);

const handleProfileSubmit = (evt) => {
  evt.preventDefault();

  const inputNameValue = inputName.value;
  const inputSubtitleValue = inputSubtitle.value;

  profileName.textContent = inputNameValue;
  profileSubtitle.textContent = inputSubtitleValue;
};
inputSubmit.addEventListener("click", handleProfileSubmit);
inputSubmit.addEventListener("click", overlayFalse);
inputSubmit.addEventListener("click", formFalse);
inputSubmit.addEventListener("click", closeButtonFalse);

const initialCards = [
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

document.addEventListener("DOMContentLoaded", function () {
  const placesContainer = document.querySelector(".places__grid");

  initialCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("places__container");

    const imageElement = document.createElement("img");
    imageElement.src = card.link;
    imageElement.alt = card.name;
    imageElement.classList.add("places__image");
    8;

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("places__container_name");

    const nameElement = document.createElement("h1");
    nameElement.classList.add("places__title");
    nameElement.textContent = card.name;

    const likeImage = document.createElement("img");
    likeImage.classList.add("places__like-button");
    likeImage.src = "../styles/assets/like_button.svg";

    cardElement.appendChild(imageElement);
    cardElement.appendChild(nameContainer);
    nameContainer.appendChild(nameElement);
    nameContainer.appendChild(likeImage);

    placesContainer.appendChild(cardElement);
  });
});
