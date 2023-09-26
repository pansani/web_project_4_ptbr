/** @format */

const profileButton = document.querySelector(".profile__button");
const popupUserForm = document.querySelector("#popup-user-form");
const formEdit = document.querySelector(".popup__form-itens");
const formAdd = document.querySelector("#form__itens");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const inputNome = document.querySelector(".popup__form-name");
const inputJob = document.querySelector(".popup__form-job");
const formClose = document.querySelector(".popup__form-close");
const submitForm = document.querySelector("#button__submit");
const addButton = document.querySelector(".profile__button-add");
const popupCardForm = document.querySelector("#popup-card-form");
const addClose = popupCardForm.querySelector("#close-add");
const addInputName = popupCardForm.querySelector("#input__title");
const addInputImage = popupCardForm.querySelector("#input__image");
const addSubmit = popupCardForm.querySelector("#add__submit");
const cards = document.querySelector(".cards");
const popupImage = document.querySelector("#popup-image");
const imgClose = popupImage.querySelector(".close-image");
const overlay = document.querySelector(".overlay");
const overlayAdd = document.querySelector("#overlay-add");
const overlayImage = document.querySelector("#overlay-image");
const addFormFirst = document.querySelector("#first");
const form = document.querySelector(".popup__form_edit");
const abrir = document.querySelectorAll(".abrir");
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
    name: "Vanois National...",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

inputNome.value = profileTitle.textContent;
inputJob.value = profileSubtitle.textContent;

const fecharComEsc = (event, popup) => {
  if (event.key === "Escape") {
    popup.classList.remove("popup_opened");
  }
  document.removeEventListener("keydown", (event) => {
    fecharComEsc(event, popup);
  });
};

function abrirPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", (event) => {
    fecharComEsc(event, popup);
  });
}

profileButton.addEventListener("click", () => {
  abrirPopup(popupUserForm);
});
addButton.addEventListener("click", () => {
  abrirPopup(popupCardForm);
});

function createCard(card) {
  const cardTemplate = document.querySelector("#template");
  const cardElement = cardTemplate.content.cloneNode(true);
  const cards = document.querySelector(".cards");
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardName.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  const cardList = cardElement.querySelector(".card");
  cards.prepend(cardList);

  cardImage.addEventListener("click", (event) => {
    abrirPopup(popupImage);
    popupImage.querySelector(".card__image")?.remove();
    popupImage.append(cardImage.cloneNode(true));
  });
}

popupCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardsitem = {
    name: addInputName.value,
    link: addInputImage.value,
  };
  createCard(cardsitem);

  addFormFirst.reset();
});

popupUserForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = inputNome.value;
  profileSubtitle.textContent = inputJob.value;
});

formClose.addEventListener("click", () => {
  popupUserForm.classList.remove("popup_opened");
});
submitForm.addEventListener("click", () => {
  popupUserForm.classList.remove("popup_opened");
});
addClose.addEventListener("click", () => {
  popupCardForm.classList.remove("popup_opened");
});
addSubmit.addEventListener("click", () => {
  popupCardForm.classList.remove("popup_opened");
});

imgClose.addEventListener("click", () => {
  popupImage.classList.remove("popup_opened");
});

window.addEventListener("load", () => {
  initialCards.forEach(createCard);
});

function removeCardElement(event) {
  const cardToRemove = event.target.closest(".card");
  if (cardToRemove) {
    cardToRemove.remove();
  }
}

function deleteCard(event) {
  if (event.target.classList.contains("del")) {
    removeCardElement(event);
  }
}
cards.addEventListener("click", deleteCard);

function lickImage(event) {
  if (event.target.classList.contains("card__unlick")) {
    const cardUnlick = event.target;
    const isLiked = cardUnlick.getAttribute("data-liked") === "true";

    if (isLiked) {
      cardUnlick.src = "./image/unlike.png";
      cardUnlick.setAttribute("data-liked", "false");
    } else {
      cardUnlick.src = "./image/liked.png";
      cardUnlick.setAttribute("data-liked", "true");
    }
  }
}

cards.addEventListener("click", lickImage);

overlay.addEventListener("click", () => {
  popupUserForm.classList.remove("popup_opened");
});
overlayAdd.addEventListener("click", () => {
  popupCardForm.classList.remove("popup_opened");
});
overlayImage.addEventListener("click", () => {
  popupImage.classList.remove("popup_opened");
});
