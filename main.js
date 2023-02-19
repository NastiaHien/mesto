const editProfileButton = document.querySelector(".profile__edit-button"); // назначение переменной кнопки редактирования
const editProfile = document.querySelector(".popup"); // назначение переменной попап
const formElement = document.querySelector(".popup__form"); // назначение переменной формы попап (профиль)
const userNameElement = document.querySelector(".profile__user-name"); // назначение переменной имя пользователя
const userOccupationElement = document.querySelector(".profile__user-occupation"); // назначение переменной профессия
const saveSubmitButton = document.querySelector(".popup__submit-button");

const userNameInput = document.querySelector(".popup__input_user-name"); //назначение переменной поля ввода имя
const OccupationInput = document.querySelector(".popup__input_user-occupation"); //назанчение переменной поля ввода профессия

const closeProfileButton = document.querySelector(".popup__button-close"); //назначение переменной кнопки закрытия формы



// отображает форму на странице, в поля формы по умолчанию назначает данные указанные в профиле
function openPopup(popup) {
  popup.classList.remove("popup__close");
  userNameInput.value = userNameElement.textContent;
  OccupationInput.value = userOccupationElement.textContent;
}

// функция скрывает форму
function closePopup(popup) {
  popup.classList.add("popup__close");
}

// функция задает данные профиля через форму
function handleFormSubmit(evt) {
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = OccupationInput.value;
}

// создает событие, при нажатии на кнопку редактировать открывается форма
editProfileButton.addEventListener("click", function () {
  openPopup(editProfile);
});

// создает событие при нажатии на кнопку закрыть, закрывается форма
closeProfileButton.addEventListener("click", function () {
  closePopup(editProfile);
});

// создает событие при нажатии на кнопку сохранить, закрывается форма
saveSubmitButton.addEventListener("click", function () {
  closePopup(editProfile);
});

//создает событие, данные введеные в форме, сохраняются в профиле
formElement.addEventListener("submit", handleFormSubmit);
