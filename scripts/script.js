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
const rectangleAdd = document.querySelector(".profile__rectangle");
const formAdd = document.querySelector(".form-places__container");
const formClose = document.querySelector(".form-places__close");
const placesSubmit = document.querySelector(".form-places__submit");

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

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("places__container_name");

    const nameElement = document.createElement("h1");
    nameElement.classList.add("places__title");
    nameElement.textContent = card.name;

    const likeImage = document.createElement("img");
    likeImage.classList.add("places__like-button");
    likeImage.src = "./styles/assets/like_button.svg";

    cardElement.appendChild(imageElement);
    cardElement.appendChild(nameContainer);
    nameContainer.appendChild(nameElement);
    nameContainer.appendChild(likeImage);

    placesContainer.appendChild(cardElement);
  });

  const form = document.querySelector(".form-places");

  let currentCardIndex = 0;

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const inputTitle = document.querySelector(".form-places__input_title");
    const inputUrl = document.querySelector(".form-places__input_url");

    if (currentCardIndex < initialCards.length) {
      initialCards[currentCardIndex] = {
        name: inputTitle.value,
        link: inputUrl.value,
      };

      inputTitle.value = " ";
      inputUrl.value = " ";

      updateCardInDOM(currentCardIndex);

      console.log(
        `Objeto ${currentCardIndex} substituído:`,
        initialCards[currentCardIndex]
      );

      currentCardIndex++;
    } else {
      console.log("todos ja foram de F cria");
    }

    formAddDesative();
    closeFormDesative();
    overlayFalse();
  });

  function updateCardInDOM(index) {
    const cardContainers = document.querySelectorAll(".places__container");
    const card = initialCards[index];

    const imageElement = cardContainers[index].querySelector(".places__image");
    const nameElement = cardContainers[index].querySelector(".places__title");

    imageElement.src = card.link;
    imageElement.alt = card.name;
    nameElement.textContent = card.name;
  }

  const likeButtons = document.querySelectorAll(".places__like-button");
  likeButtons.forEach((likeImage) => {
    likeImage.addEventListener("click", function () {
      if (likeImage.src.includes("like_button.svg")) {
        likeImage.src = "./styles/assets/like_button__active.svg";
      } else {
        likeImage.src = "./styles/assets/like_button.svg";
      }
    });
  });
});

const formTrue = () => {
  form.classList.remove("form__container");
  form.classList.add("form__container_active");
};
buttonChangeHandler.addEventListener("click", formTrue);

const formFalse = () => {
  form.classList.remove("form__container_active");
  form.classList.add("form__container");
};

const closeButtonTrue = () => {
  closeButton.classList.remove("form__close-button");
  closeButton.classList.add("form__close-button_active");
};
buttonChangeHandler.addEventListener("click", closeButtonTrue);

const closeButtonFalse = () => {
  closeButton.classList.remove("form__close-button_active");
  closeButton.classList.add("form__close-button");
};

const overlayTrue = () => {
  overlay.classList.remove("overlay");
  overlay.classList.add("overlay__active");
};
buttonChangeHandler.addEventListener("click", overlayTrue);

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

  overlayFalse();
  formFalse();
  closeButtonFalse();
};
inputSubmit.addEventListener("click", handleProfileSubmit);

const formAddActive = () => {
  formAdd.classList.remove("form-places__container");
  formAdd.classList.add("form-places__container_active");
};
rectangleAdd.addEventListener("click", formAddActive);
rectangleAdd.addEventListener("click", overlayTrue);

const formAddDesative = () => {
  formAdd.classList.remove("form-places__container_active");
  formAdd.classList.add("form-places__container");
};

const closeFormActive = () => {
  formClose.classList.remove("form-places__close");
  formClose.classList.add("form-places__close_active");
};
rectangleAdd.addEventListener("click", closeFormActive);

const closeFormDesative = () => {
  formClose.classList.remove("form-places__close_active");
  formClose.classList.add("form-places__close");
};

formClose.addEventListener("click", overlayFalse);
formClose.addEventListener("click", formAddDesative);
formClose.addEventListener("click", closeFormDesative);
