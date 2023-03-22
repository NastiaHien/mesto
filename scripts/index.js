import { photoCards } from "./cards.js";
import { toggleButtonState, resetValidation, inactiveButtonClass, inputErrorClass, errorClass } from "./validate.js";

//  попапы
const popups = document.querySelectorAll(".popup"); // секция попап
const editProfilePopup = document.querySelector(".popup_profile-edit"); // попап-редактор профиля
const addPhotoPopup = document.querySelector(".popup_add-photo"); // попап-добавить карточку

//  кнопки
const editProfileButton = document.querySelector(".profile__edit-button"); //  кнопка "редактировать профиль"
const addPhotoButton = document.querySelector(".profile__add-button"); //  кнопка "добавить карточку"
const closeProfileButton = editProfilePopup.querySelector(".popup__button-close-profile"); // кнопка закрытия формы "редактировать профиль"
const closeAddPhotoButton = addPhotoPopup.querySelector(".popup__button-close-add"); // кнопка закрытия формы "добавить карточку"
const submitButtonClass = ".popup__submit-button"; //кнопка сохранить

// формы для ввода
const elementFormProfile = editProfilePopup.querySelector(".popup__form-profile"); //  форма "редактировать профиль"
const formAddCard = document.querySelector(".popup__form-card"); // форма "добавить новую карточку"

//  имя пользователя и профессия на странице профиля
const userNameElement = document.querySelector(".profile__user-name"); // имя пользователя
const userOccupationElement = document.querySelector(".profile__user-occupation"); //  информация о пользователе

// поля форм для ввода
const userNameInput = editProfilePopup.querySelector(".popup__input_user_name"); // поле ввода имени
const occupationInput = editProfilePopup.querySelector(".popup__input_user_occupation"); //поле ввода информации о пользователе
const nameImageElement = formAddCard.querySelector(".popup__input_image_name"); // поле ввода названия карточки
const linkImageElement = formAddCard.querySelector(".popup__input_image_link"); // поле ввода ссылки на карточку

// функция открывает попап и добавляет обработчик события для Escape
function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscapeKey);
}

// функция закрывает попап и удаляет обработчик события с Escape
function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

// по нажатию клавиши Escape закрывает текущий открытый попап
function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

// закрывает открытый попап по клику на бэкраунд зону
popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("popup_opened");
    }
  });
});

// EDIT PROFILE BLOCK
//Отображает форму редактирования профиля, в поля формы по умолчанию назначает данные указанные в профиле
const submitButtonProfile = editProfilePopup.querySelector(submitButtonClass);

function openProfilePopup() {
  resetValidation(editProfilePopup, ".popup__input", inputErrorClass, errorClass);
  openPopup(editProfilePopup);
  userNameInput.value = userNameElement.textContent;
  occupationInput.value = userOccupationElement.textContent;
  toggleButtonState([userNameInput, occupationInput], submitButtonProfile, inactiveButtonClass);
}

// функция задает данные профиля через форму и закрывает форму
function submitFormProfile(evt) {
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = occupationInput.value;
  closePopup(editProfilePopup);
}

// при нажатии на кнопку редактировать открывается форма "редактировать профиль"
editProfileButton.addEventListener("click", function () {
  openProfilePopup();
});

// закрывает форму "редактировать профиль" при нажатии на кнопку close (X)
closeProfileButton.addEventListener("click", function () {
  closePopup(editProfilePopup);
});

// данные введеные в форме "редактировать профиль" , сохраняются в профиле и закрываются
elementFormProfile.addEventListener("submit", submitFormProfile);

// ADD PHOTOCARD ELEMENT BLOCK

// при нажатии на кнопку добавить открывется форма "добавить фото" с пустыми полями ввода и неактивной кнопкой
addPhotoButton.addEventListener("click", function () {
  formAddCard.reset();
  resetValidation(addPhotoPopup, ".popup__input", inputErrorClass, errorClass);
  openPopup(addPhotoPopup);
});

// закрывает форму "добавить фото" при нажатии на кнопку close (X)
closeAddPhotoButton.addEventListener("click", function () {
  closePopup(addPhotoPopup);
});

// Функция создания новой карточки в галереи
function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content.cloneNode(true);
  const cardImage = cardTemplate.querySelector(".gallery__image");
  const cardTitle = cardTemplate.querySelector(".gallery__title");
  const likeButton = cardTemplate.querySelector(".gallery__button-like");
  const deleteButton = cardTemplate.querySelector(".gallery__bin-button");

  // устанавливает свойство элемента карты и описания
  cardImage.setAttribute("src", card.image);
  cardImage.setAttribute("alt", card.alt);
  cardTitle.textContent = card.title;

  // обработчики события "like", "delete card", "zoom card"
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("gallery__button-like_active");
  });

  deleteButton.addEventListener("click", function (evt) {
    evt.target.closest(".gallery__card").remove();
  });

  cardImage.addEventListener("click", function (evt) {
    const cardTitle = evt.target.closest(".gallery__card").querySelector(".gallery__title").textContent;
    const cardAlt = evt.target.getAttribute("alt");
    zoomImage.setAttribute("src", evt.target.src);
    zoomImage.setAttribute("alt", cardAlt);
    zoomTitle.textContent = cardTitle;
    openPopup(zoomPhotoPopup);
  });

  return cardTemplate;
}

// функция добавляет карточку в контейнер галереи
function renderCard(card, cardsContainer) {
  const cardTemplate = createCard(card);
  cardsContainer.prepend(cardTemplate);
}

const cardsContainer = document.querySelector(".gallery");

// перебирает массив и добавляет каждую карточку в контейнер
photoCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.appendChild(cardElement);
});

const submitButtonCard = formAddCard.querySelector(submitButtonClass);

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  const titleValue = nameImageElement.value;
  const imageValue = linkImageElement.value;

  const newCard = {
    title: titleValue,
    image: imageValue,
    alt: titleValue,
  };

  renderCard(newCard, cardsContainer);

  closePopup(addPhotoPopup);
}

// Добавляет слушатели в форму
formAddCard.addEventListener("submit", handleFormSubmitCard);

// Zoom
const zoomPhotoPopup = document.querySelector(".popup_zoom-items");
const zoomImage = document.querySelector(".popup__zoom-image");
const zoomTitle = document.querySelector(".popup__zoom-title");

const closeZoomButton = zoomPhotoPopup.querySelector(".popup__button-close-zoom-photo");

closeZoomButton.addEventListener("click", function () {
  closePopup(zoomPhotoPopup);
});
