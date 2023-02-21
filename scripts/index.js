const editProfileButton = document.querySelector('.profile__edit-button'); // назначение переменной кнопки редактирования
const editProfile = document.querySelector('.popup'); // назначение переменной попап
const formElement = editProfile.querySelector('.popup__form'); // назначение переменной формы попап
const userNameElement = document.querySelector('.profile__user-name'); // назначение переменной имя пользователя
const userOccupationElement = document.querySelector('.profile__user-occupation'); // назначение переменной профессия

const userNameInput = editProfile.querySelector('.popup__input_user_name'); //назначение переменной поля ввода имя
const occupationInput = editProfile.querySelector('.popup__input_user_occupation'); //назначение переменной поля ввода профессия

const closeProfileButton = editProfile.querySelector('.popup__button-close'); // назначение переменной кнопки закрытия формы

//отображает форму на странице, в поля формы по умолчанию назначает данные указанные в профиле
function openPopup() {
  editProfile.classList.add('popup_opened');
  userNameInput.value = userNameElement.textContent;
  occupationInput.value = userOccupationElement.textContent;
}

// функция скрывает форму
function closePopup() {
  editProfile.classList.remove('popup_opened');
};

// функция задает данные профиля через форму и закрывает форму
function handleFormSubmit(evt) {
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = occupationInput.value;
  closePopup();
};

// создает событие, при нажатии на кнопку редактировать открывается форма
editProfileButton.addEventListener('click', function () {
  openPopup();
});

// создает событие, закрывает форму при нажатии на кнопку close
closeProfileButton.addEventListener('click', function () {
  closePopup();
});

//создает событие, данные введеные в форме, сохраняются в профиле и закрываются
formElement.addEventListener('submit', handleFormSubmit);







