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


lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
    speed: 500
});

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
const phoneInput = document.querySelectorAll('.js-phone-input');
phoneInput.forEach(input => {
    input.onfocus = () => {
        if (input.value === '') {
            input.value = '+';
        }
    }
});
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 30;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 744){
        const processSlider = new Swiper('.process__wrapper', {
            scrollbar: {
                el: '.process__scrollbar',
                draggable: true,
            },
            spaceBetween: 20  
        });
    }
})

//Скрипт для блока Проекты (закомментирован)
// const projectsSwiper = new Swiper('.projects__wrapper', {
//     navigation: {
//         nextEl: '.projects__right-btn',
//         prevEl: '.projects__left-btn',
//     },
//     loop: true,
//     slidesPerView: 'auto',
//     breakpoints: {
//         320: {
//             spaceBetween: 45
//         },
//         1920: {
//             spaceBetween: 60
//         }
//     }
// })

const servicesSwiper = new Swiper('.services__wrapper', {
    navigation: {
        nextEl: '.services__right-btn',
        prevEl: '.services__left-btn',
    },
    loop: false,
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            spaceBetween: 30
        },
        1920: {
            spaceBetween: 60
        }
    }
})