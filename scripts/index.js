let openPopupButton = document.querySelector('.profile__edit');
let closePopupButton = document.querySelector('.popup__close')
let savePopupButton = document.querySelector('.popup__input-button');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let inputName = document.querySelector('.popup__input-name');
let inputDescription = document.querySelector('.popup__input-description')

function open() {
    popup.classList.add('popup_open');
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
}

function close() {
    popup.classList.remove('popup_open');
}

function save() {
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    close()
}

openPopupButton.addEventListener('click', open);
closePopupButton.addEventListener('click', close);
savePopupButton.addEventListener('click', save);