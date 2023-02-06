const header = document.querySelector('.header');
const burgerBtn = header.querySelector('.header__button');
const burgerBtnDesc = header.querySelector('.js-btn-info');
const popup = header.querySelector('.header__popup');
const menu = header.querySelector('.nav__list').cloneNode(1);

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header__button--cross');
    popup.classList.toggle('header__popup--active');
    popup.append(menu);

    if(popup.classList.contains('header__popup--active')) {
        burgerBtnDesc.textContent = 'Закрыть меню';
    } else {
        burgerBtnDesc.textContent = 'Открыть меню';
    }
})

