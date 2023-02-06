
const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('.modal__form');
const modalOpenBtn = document.querySelectorAll('.js-modal-open');
const modalCloseBtn = modal.querySelector('.js-modal-close');
const modalSubmitBtn = modal.querySelector('.modal__button');

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

modalSubmitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (modalForm.checkValidity()) {
        modalToggler();
    }
})