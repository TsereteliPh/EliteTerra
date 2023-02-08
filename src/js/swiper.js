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