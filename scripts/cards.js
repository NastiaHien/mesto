  import { photoCards } from "./Data.js";
  import { openPopup, closePopup } from "./index.js";

  // export class Card {
  //   constructor(data, templateSelector) {
  //     this._title = data.title;
  //     this._image = data.image;
  //     this._alt = data.alt;
  //     this._templateSelector = templateSelector;
  //   }
  
  //   _getTemplate() {
  //     const cardTemplate = document
  //       .querySelector(this._templateSelector)
  //       .content
  //       .querySelector('.gallery__card')
  //       .cloneNode(true);
  
  //     return cardTemplate;
  //   }
  
  //   _setEventListeners() {
  //     const likeButton = this._cardElement.querySelector(".gallery__button-like");
  //     const deleteButton = this._cardElement.querySelector(".gallery__bin-button");
  //     const cardImage = this._cardElement.querySelector(".gallery__image");
  //     const zoomImage = document.querySelector('.popup__zoom-image');
  //     const zoomTitle = document.querySelector('.popup__zoom-title');
  //     const zoomPhotoPopup = document.querySelector('.popup_zoom-items');
  //     const closeZoomButton = zoomPhotoPopup.querySelector(".popup__button-close-zoom-photo");
      
    
  //     likeButton.addEventListener("click", () => {
  //       likeButton.classList.toggle("gallery__button-like_active");
  //     });
  
  //     deleteButton.addEventListener("click", () => {
  //       this._cardElement.remove();
  //     });
  
  //     cardImage.addEventListener("click", () => {
  //       zoomImage.setAttribute("src", this._image);
  //       zoomImage.setAttribute("alt", this._alt);
  //       zoomTitle.textContent = this._title;
  //       openPopup(zoomPhotoPopup);
           
  //     });

  //     closeZoomButton.addEventListener("click", () => {
  //       closePopup(zoomPhotoPopup);
  //     }); 

  //   }
  
  //   _handleLikeClick() {
    
  //   }
  
  //   _handleDeleteClick() {
      
  //   }
  
  //   _handleCardClick() {
      
  //   }
  
  //   generateCard() {
  //     this._cardElement = this._getTemplate();
  //     const cardImage = this._cardElement.querySelector(".gallery__image");
  //     const cardTitle = this._cardElement.querySelector(".gallery__title");
  
  //     cardImage.setAttribute("src", this._image);
  //     cardImage.setAttribute("alt", this._alt);
  //     cardTitle.textContent = this._title;
  
  //     this._setEventListeners();
  
  //     return this._cardElement;
  //   }
  // }

  export class Card {
    constructor(data, templateSelector) {
      this._title = data.title;
      this._image = data.image;
      this._alt = data.alt;
      this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
      const cardTemplate = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.gallery__card')
        .cloneNode(true);
  
      return cardTemplate;
    }
  
    _setEventListeners() {
      const likeButton = this._cardElement.querySelector(".gallery__button-like");
      const deleteButton = this._cardElement.querySelector(".gallery__bin-button");
      const cardImage = this._cardElement.querySelector(".gallery__image");
      const zoomImage = document.querySelector('.popup__zoom-image');
      const zoomTitle = document.querySelector('.popup__zoom-title');
      const zoomPhotoPopup = document.querySelector('.popup_zoom-items');
      const closeZoomButton = zoomPhotoPopup.querySelector(".popup__button-close-zoom-photo");
      
    
      likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("gallery__button-like_active");
      });
  
      deleteButton.addEventListener("click", () => {
        this._cardElement.remove();
      });
  
      cardImage.addEventListener("click", () => {
        zoomImage.setAttribute("src", this._image);
        zoomImage.setAttribute("alt", this._alt);
        zoomTitle.textContent = this._title;
        openPopup(zoomPhotoPopup);
           
      });
  
      closeZoomButton.addEventListener("click", () => {
        closePopup(zoomPhotoPopup);
      }); 
  
    }
  
    _handleLikeClick() {
    
    }
  
    _handleDeleteClick() {
      
    }
  
    _handleCardClick() {
      
    }
  
    generateCard() {
      this._cardElement = this._getTemplate();
      const cardImage = this._cardElement.querySelector(".gallery__image");
      const cardTitle = this._cardElement.querySelector(".gallery__title");
  
      cardImage.setAttribute("src", this._image);
      cardImage.setAttribute("alt", this._alt);
      cardTitle.textContent = this._title;
  
      this._setEventListeners();
  
      return this._cardElement;
    }
  }
  

 export const cardsContainer = document.querySelector(".gallery");

  photoCards.forEach((card) => {
    const cardInstance = new Card(card, '#card-template');
    const cardElement = cardInstance.generateCard();
    cardsContainer.appendChild(cardElement);
  });
