
const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('.modal__form');
const modalInputs = modal.querySelectorAll('.modal__input');
const modalMessages = modal.querySelectorAll('.modal__caption');
const modalOpenBtn = document.querySelectorAll('.js-modal-open');
const modalCloseBtn = modal.querySelector('.js-modal-close');
const modalSubmitBtn = modal.querySelector('.modal__button');

//Функционал открытия-закрытия модального окна
const bodyLock = () => {
    document.body.style.overflow = 'hidden';
}

const bodyUnlock = () => {
    document.body.style.overflow = 'visible';
}

const modalToggler = () => {
    if (modal.classList.contains('modal--active')) {
        modal.classList.remove('modal--active');
        bodyUnlock();
    } else {
        modal.classList.add('modal--active');
        bodyLock();
    }
}

modalOpenBtn.forEach(button => {
    button.addEventListener('click', () => {
        modalToggler();
    }) 
});

modalCloseBtn.addEventListener('click', () => {
    modalToggler();
})

//Функционал валидации формы модального окна

const validationFail = (elem) => {
    elem.style.borderColor = '#CF0909';
}

const validationSuccess = (elem) => {
    elem.style.borderColor = '#5BA23A';
}

modalInputs.forEach(input => {
    input.onchange = function() {
        if (input.value !== "" && !input.validity.typeMismatch && !input.validity.patternMismatch) {
            validationSuccess(input);
        } else {
            validationFail(input);
        }
    }
});

//Функционал отправки

const modalMessageToggler = () => {
    modalMessages.forEach(message => {
        message.classList.toggle('modal__caption--show');
    });
}

modalSubmitBtn.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (modalForm.checkValidity()) {
        modalMessageToggler();
        modalForm.style.display = 'none';
    } else {
        modalSubmitBtn.animate([
            {transform: 'translateX(4px)'},
            {transform: 'translateX(-4px)'},
            {transform: 'translateX(4px)'},
            {transform: 'translateX(-4px)'},
            {transform: 'translateX(4px)'},
            {transform: 'translateX(0)'}
          ], {
            duration: 500,
            easing: 'ease'
          })
    }
})