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

  _setEventListeners() {
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const formValues = {};
    this._inputElements.forEach((inputElement) => {
      formValues[inputElement.name] = inputElement.value;
    });

    const profileName = document.querySelector(".form__name");
    const profileSubtitle = document.querySelector(".form__subtitle");
    profileName.textContent = formValues["inputName"];
    profileSubtitle.textContent = formValues["inputSubtitle"];

    overlayFalse();
    formFalse();
    closeButtonFalse();
  }

  enableValidation() {
    this._toggleButtonState();
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