/** @format */

import { overlayFalse, formFalse, closeButtonFalse } from "./utils.js";

export class FormValidator {
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
    const errorElements = this._formElement.querySelectorAll(".form__message");
    const errorElement = Array.from(errorElements).find(
      (element) => element.id === `${inputElement.name}_message`
    );

    if (errorElement) {
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
    }
  }

  _hideInputError(inputElement) {
    const errorElements = this._formElement.querySelectorAll(".form__message");
    const errorElement = Array.from(errorElements).find(
      (element) => element.id === `${inputElement.name}_message`
    );

    if (errorElement) {
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.textContent = "";
      errorElement.classList.remove(this._config.errorClass);
    }
  }

  _checkInputValidity(inputElement) {
    const inputLength = inputElement.value.length;
    console.log("this._formElement", this._formElement);
    const errorElement = this._formElement.querySelector(
      `.${inputElement.classList[1]}__message`
    );
    console.log("errorElement", errorElement);

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

    formSubmit.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.handleSubmit(evt);
    });
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        console.log("this._formElement", this._formElement);
        const errorElements =
          this._formElement.querySelectorAll(".form__message");
        const errorElement = Array.from(errorElements).find((element) =>
          element.classList.contains(`form__${inputElement.name}_message`)
        );
        console.log("errorElement", errorElement);
        console.log("errorElements", errorElements);
        console.log("inputElement.classList[1]", inputElement.classList[1]);

        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}
