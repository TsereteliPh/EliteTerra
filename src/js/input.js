const phoneInput = document.querySelectorAll('.js-phone-input');
phoneInput.forEach(input => {
    input.onfocus = () => {
        if (input.value === '') {
            input.value = '+';
        }
    }
});