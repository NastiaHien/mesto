//  попапы
const popups = document.querySelectorAll('.popup'); // секция попап
const editProfilePopup = document.querySelector('.popup_profile-edit'); // попап-редактор профиля
const addPhotoPopup = document.querySelector('.popup_add-photo') // попап-добавить карточку

//  кнопки
const editProfileButton = document.querySelector(".profile__edit-button"); //  кнопка "редактировать профиль"
const addPhotoButton = document.querySelector(".profile__add-button"); //  кнопка "добавить карточку"
const closeProfileButton = editProfilePopup.querySelector(".popup__button-close-profile"); // кнопка закрытия формы "редактировать профиль"
const closeAddPhotoButton = addPhotoPopup.querySelector(".popup__button-close-add"); // кнопка закрытия формы "добавить карточку"

// формы для ввода
const formElementProfile = editProfilePopup.querySelector(".popup__form-profile"); //  форма "редактировать профиль"

//  имя пользователя и профессия на странице профиля
const userNameElement = document.querySelector(".profile__user-name"); // имя пользователя
const userOccupationElement = document.querySelector(".profile__user-occupation"); //  информация о пользователе

// поля форм для ввода
const userNameInput = editProfilePopup.querySelector(".popup__input_user_name"); // поле ввода имени
const occupationInput = editProfilePopup.querySelector(".popup__input_user_occupation"); //поле ввода информации о пользователе



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
popups.forEach(popup => {
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.remove('popup_opened');
    }
  });
});

// добавляет глобальный обработчик событий для нажатия клавиши "Escape"
document.addEventListener("keydown", function(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
});


// EDIT PROFILE BLOCK
//Отображает форму редактирования профиля, в поля формы по умолчанию назначает данные указанные в профиле
function openProfilePopup() {
  openPopup(editProfilePopup);
  userNameInput.value = userNameElement.textContent;
  occupationInput.value = userOccupationElement.textContent;
}

// функция задает данные профиля через форму и закрывает форму
function FormSubmitProfile(evt) {
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
formElementProfile.addEventListener("submit", FormSubmitProfile);

// закрывает открытый popup нажатием на клавишу Escape
document.addEventListener("keydown", handleEscapeKey);



// ADD PHOTOCARD ELEMENT BLOCK

// при нажатии на кнопку добавить открывется форма "добавить фото"
addPhotoButton.addEventListener("click", function () {
  openPopup(addPhotoPopup);
});

// закрывает форму "добавить фото" при нажатии на кнопку close (X)
closeAddPhotoButton.addEventListener("click", function () {
  closePopup(addPhotoPopup);
});

//Массив изображений с заголовком
const photoCards = [
  {
    title: "National Park, Australia",
    image: "https://images.unsplash.com/photo-1548296404-93c7694b2f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    // alt: "National Park, Australia",
  },
  {
    title: "San Francisco, CA, USA",
    image: "https://images.unsplash.com/photo-1677629322752-7045c2c04b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    // alt: "San Francisco, CA, USA",
  },
  {
    title: "New York, Brooklyn",
    image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1297&q=80",
    // alt: "New York, Brooklyn",
  },
  {
    title: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    // alt: "Toronto, Canada",
  },
  {
    title: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1562829612-55b71f529a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    // alt: "Seoul, South Korea",
  },
  {
    title: "Los Angeles, CA, USA",
    image: "https://images.unsplash.com/photo-1647963945830-6c5e1c043f76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1382&q=80",
    // alt: "Los Angeles, CA, USA",
  },
];

const cardsContainer = document.querySelector(".gallery");

function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content.cloneNode(true);
  const cardImage = cardTemplate.querySelector(".gallery__image");
  const cardTitle = cardTemplate.querySelector(".gallery__title");

  cardImage.setAttribute("src", card.image);
  cardImage.setAttribute("alt", card.alt);
  cardTitle.textContent = card.title;

  return cardTemplate;
}

function renderCard(card, cardsContainer) {
  const cardTemplate = createCard(card);
  cardsContainer.prepend(cardTemplate);
}

photoCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.appendChild(cardElement);
});

// поля переменных элемента формы
const formAddCard = document.querySelector(".popup__form-card");
const nameImageElement = formAddCard.querySelector(".popup__input_image_name");
const linkImageElement = formAddCard.querySelector(".popup__input_image_link");

// Функция отправки формы 
function handleFormSubmitCard(evt) {
  evt.preventDefault();

  // Получает значение вводимых элементов в поля формы
  const titleValue = nameImageElement.value;
  const imageValue = linkImageElement.value;

  // Создает новую карточку объекта и добавляет в массив
  const newCard = {
    title: titleValue,
    image: imageValue,
    alt: titleValue,
  };

  // Отображает новую карточку в контейнере галереи
  renderCard(newCard, cardsContainer);

  // Сбрасывает форму
  formAddCard.reset();
  closePopup(addPhotoPopup);
}

// Добавляет слушатели в форму
formAddCard.addEventListener("submit", handleFormSubmitCard);

cardsContainer.addEventListener("click", function (evt) {

  // добавление кнопки "лайк"
  if (evt.target.classList.contains("gallery__button-like")) {
    evt.target.classList.toggle("gallery__button-like_active");
  } 
  
  // кнопка удаления карточки 
  else if (evt.target.classList.contains("gallery__bin-button")) {
    evt.target.closest(".gallery__card").remove();
  } 
  
  else if (evt.target.classList.contains("gallery__image")) {
    const cardTitle = evt.target.closest(".gallery__card").querySelector(".gallery__title").textContent;
    const cardAlt = evt.target.getAttribute("alt");
    zoomImage.setAttribute("src", evt.target.src);
    zoomImage.setAttribute("alt", cardAlt);
    zoomTitle.textContent = cardTitle;
    openPopup(zoomPhotoPopup);
  }
});

// Zoom
const zoomPhotoPopup = document.querySelector(".popup_zoom-items");
const zoomImage = document.querySelector(".popup__zoom-image");
const zoomTitle = document.querySelector(".popup__zoom-title");


const closeZoomButton = zoomPhotoPopup.querySelector(".popup__button-close-zoom-photo");

closeZoomButton.addEventListener("click", function () {
  closePopup(zoomPhotoPopup);
});

