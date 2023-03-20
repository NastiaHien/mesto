//объявление переменных
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible'
  });

  // Функция переключает активность submit(кнопки) на основе валидности полей ввода
  function toggleButtonState(inputs, submitButton, inactiveButtonClass) {
    const hasInvalidInput = inputs.some((input) => !input.validity.valid);
    if (hasInvalidInput) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(inactiveButtonClass);
      submitButton.disabled = false;
    }
  }
  
  // Функция отображает сообщение об ошибке и выделяет соответствующее поле ввода
  function showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  // Функция скрывает сообщение об ошибке и снимает выделение полей ввода 
  function hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  }
  
  //Функция проверяет корректность поля ввода и вызвает соовтествующую функцию (показать или скрыть)
  function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {

      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {

      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  }

// Функция добавляет прослушиватель событий для каждого поля ввода и отправки формы
function setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const submitButton = formElement.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, submitButton, inactiveButtonClass);
    });
});
    
}

//Функция задает проверку всех форм, соответсвующей параметрам заданной функции
function enableValidation({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
    });
}


