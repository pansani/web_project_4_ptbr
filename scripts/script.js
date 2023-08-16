const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form__container");
const buttonChangeHandler = document.querySelector(".profile__square");
const closeButton = document.querySelector(".form__close-button");
const inputName = document.querySelector(".form__input_name");
const inputSubtitle = document.querySelector(".form__input_subtitle");
const inputSubmit = document.querySelector(".form__input_submit");
const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");

const formTrue = () => {
    form.classList.remove("form__container");
    form.classList.add("form__container_active"); 
}
buttonChangeHandler.addEventListener("click", formTrue);

const closeButtonTrue = () => {
    closeButton.classList.remove("form__close-button");
    closeButton.classList.add("form__close-button_active");
}
buttonChangeHandler.addEventListener("click", closeButtonTrue);

const overlayTrue = () => {
    overlay.classList.remove("overlay");
    overlay.classList.add("overlay__active");
}
buttonChangeHandler.addEventListener("click", overlayTrue);

const formFalse = () => {
    form.classList.remove("form__container_active");
    form.classList.add("form__container"); 
}

const closeButtonFalse = () => {
    closeButton.classList.remove("form__close-button_active");
    closeButton.classList.add("form__close-button");
}

const overlayFalse = () => {
    overlay.classList.remove("overlay__active");
    overlay.classList.add("overlay");
}

closeButton.addEventListener("click", overlayFalse);
closeButton.addEventListener("click", formFalse);
closeButton.addEventListener("click", closeButtonFalse);

const handleProfileSubmit = (evt) =>{
    evt.preventDefault();

    const inputNameValue = inputName.value;
    const inputSubtitleValue = inputSubtitle.value;

    profileName.textContent = inputNameValue;
    profileSubtitle.textContent = inputSubtitleValue;
}
inputSubmit.addEventListener("click", handleProfileSubmit);
inputSubmit.addEventListener("click", overlayFalse);
inputSubmit.addEventListener("click", formFalse);
inputSubmit.addEventListener("click", closeButtonFalse);







