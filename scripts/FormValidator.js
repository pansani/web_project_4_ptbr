/** @format */

import { overlayFalse, formFalse, closeButtonFalse } from "./utils";

class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputElements = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    this._submitButtonElement = formElement.querySelector(
      config.submitButtonSelector
    );

    this._setEventListeners();
    console.log("Construtor FormValidator chamado");
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.classList[1]}__message`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.classList[1]}__message`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass);
  }

  _checkInputValidity(inputElement) {
    const inputLength = inputElement.value.length;

    if (inputLength === 0) {
      this._showInputError(inputElement, "Por favor, preencha este campo");
      console.log("teste inputerror");
    } else if (inputLength < 2) {
      this._showInputError(
        inputElement,
        "Aumente este texto para 2 caracteres ou mais. Você está usando 1 caractere no momento"
      );
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    const isValid = this._inputElements.every(
      (inputElement) => inputElement.validity.valid
    );

    if (isValid) {
      this._submitButtonElement.classList.remove(
        this._config.inactiveButtonClass
      );
      this._submitButtonElement.disabled = false;
    } else {
      this._submitButtonElement.classList.add(this._config.inactiveButtonClass);
      this._submitButtonElement.disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formValues = {};
    this._inputElements.forEach((inputElement) => {
      formValues[inputElement.name] = inputElement.value;
    });

    const profileNameElement = document.getElementById("profileName");
    const profileSubtitleElement = document.getElementById("profileSubtitle");

    profileNameElement.textContent = formValues["inputName"];
    profileSubtitleElement.textContent = formValues["inputSubtitle"];

    overlayFalse();
    formFalse();
    closeButtonFalse();
  }

  enableValidation() {
    this._toggleButtonState();
  }
  _setEventListeners() {
    const formSubmit = document.querySelector(".form__input_submit");

    console.log("Antes de adicionar o event listener ao formSubmit");

    formSubmit.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.handleSubmit(evt);
      console.log("Event listener do formSubmit chamado");
    });

    console.log("Adicionando event listener a um inputElement");

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    console.log("Método _setEventListeners chamado");
  }
}

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

const profileForm = document.getElementById("form");
const placesForm = document.getElementById("form-places");

const profileFormValidator = new FormValidator(configProfile, profileForm);
profileFormValidator.enableValidation();

const placesFormValidator = new FormValidator(configPlaces, placesForm);
placesFormValidator.enableValidation();
