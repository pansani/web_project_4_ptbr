/** @format */

function enableValidation(config) {
  const form = document.querySelector(config.formSelector);

  function showError(input) {
    input.classList.add(config.inputErrorClass);
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(config.errorClass);
  }

  function hideError(input) {
    input.classList.remove(config.inputErrorClass);
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(config.errorClass);
  }

  function checkInputValidity(input) {
    if (input.validity.valid) {
      hideError(input);
    } else {
      showError(input);
    }
  }

  function toggleButtonState(button, isValid) {
    if (isValid) {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
    }
  }

  function setEventListeners() {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const submitButton = form.querySelector(config.submitButtonSelector);

    inputList.forEach((input) => {
      input.addEventListener("input", function () {
        checkInputValidity(input);
        toggleButtonState(submitButton, form.checkValidity());
      });
    });

    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    toggleButtonState(submitButton, form.checkValidity());
  }

  setEventListeners();
}

export { enableValidation };
