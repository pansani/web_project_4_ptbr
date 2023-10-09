/** @format */

/* enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

const inputName = document.querySelector(".form__input_name");
const inputSubtitle = document.querySelector(".form__input_subtitle");
const inputNameMessage = document.querySelector(".form__name_message");
const inputSubtitleMessage = document.querySelector("#form__subtitle_message");

const validateProfileNameForm = () => {
  const inputNameValue = document.querySelector(".form__input_name").value;
  if (inputNameValue.length === 0) {
    inputNameMessage.innerHTML = "Por favor preencha este campo";
  } else if (inputNameValue.length < 2) {
    inputNameMessage.innerHTML =
      "Aumente este texto para 2 caracteres ou mais. Você está usando 1 caractere no momento";
  } else if (inputNameValue.length > 2) {
    inputNameMessage.innerHTML = "";
  }
};

inputName.addEventListener("input", validateProfileNameForm);

const validateProfileSubtitleForm = () => {
  const inputSubtitleValue = document.querySelector(
    ".form__input_subtitle"
  ).value;

  if (inputSubtitleValue.length === 0) {
    inputSubtitleMessage.innerHTML = "Por favor preencha este campo";
  } else if (inputSubtitleValue.length < 2) {
    inputSubtitleMessage.innerHTML =
      "Aumente este texto para 2 caracteres ou mais. Você está usando 1 caractere no momento";
  } else if (inputSubtitleValue.length > 2) {
    inputSubtitleMessage.innerHTML = "";
  }
};

inputSubtitle.addEventListener("input", validateProfileSubtitleForm);

const inputTitleMessage = document.querySelector(".form-places__title_message");
const inputUrlMessage = document.querySelector("#form-places__url_message");

const validatePlacesTitleForm = () => {
  const inputTitleValue = document.querySelector(
    ".form-places__input_title"
  ).value;

  if (inputTitleValue.length === 0) {
    inputTitleMessage.innerHTML = "Por favor preencha este campo";
  } else if (inputTitleValue.length < 2) {
    inputTitleMessage.innerHTML =
      "Aumente este texto para 2 caracteres ou mais. Você está usando 1 caractere no momento";
  } else if (inputTitleValue.length > 2) {
    inputTitleMessage.innerHTML = "";
  }
};

const formPlacesTitle = document.querySelector(".form-places__input_title");
formPlacesTitle.addEventListener("input", validatePlacesTitleForm);

const validatePlacesUrlForm = () => {
  const inputUrlValue = document.querySelector(".form-places__input_url").value;

  if (inputUrlValue.length === 0) {
    inputUrlMessage.innerHTML = "Por favor preencha este campo";
  } else if (inputUrlValue.length < 2) {
    inputUrlMessage.innerHTML =
      "Aumente este texto para 2 caracteres ou mais. Você está usando 1 caractere no momento";
  } else if (inputUrlValue.length > 2) {
    inputUrlMessage.innerHTML = "";
  }
};

const formPlacesUrl = document.querySelector(".form-places__input_url");
formPlacesUrl.addEventListener("input", validatePlacesUrlForm); */
