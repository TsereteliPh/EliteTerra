const form = document.querySelector('.quiz__form');
if (form) {
    const questions = form.querySelectorAll('.js-quiz-question');
    const lastQuestion = form.querySelector('.form__last');
    const quizSuccess = form.querySelector('.js-quiz-success');
    const quizAlert = form.querySelector('.form__invalid');
    const quizNext = form.querySelector('.form__next-btn');
    const quizPrev = form.querySelector('.form__back-btn');
    const quizSubmit = form.querySelector('.form__submit-btn');
    const quizReset = form.querySelector('.form__reset-btn');


    let questionCounter = 0;
    let quizSend = false;

    const currentQuestion = (n) => {
        for (question of questions) {
            question.classList.remove('js-quiz-active');
        }
        if (quizSend) {
            quizSuccess.classList.add('js-quiz-active');
            quizNext.style.display = 'none';
            quizPrev.style.display = 'none';
            quizReset.style.display = 'block';
        } else {
            quizNext.style.display = 'flex';
            quizPrev.style.display = 'flex';
            quizReset.style.display = 'none';
            quizSuccess.classList.remove('js-quiz-active');
            questions[n].classList.add('js-quiz-active');
            btnHider();
        }
    }

    const btnHider = () => {
        if (lastQuestion.classList.contains('js-quiz-active')) {
            quizNext.style.display = 'none';
        } else {
            quizNext.style.display = 'flex';
        }
    }

    const nextQuestion = () => {
        if (questionCounter === questions.length - 1) {
            return
        } else {
            questionCounter++;
            currentQuestion(questionCounter);
        }
    }

    const prevQuestion = () => {
        if (questionCounter === 0) {
            return
        } else {
            questionCounter--;
            currentQuestion(questionCounter);
        }
    }

    quizNext.addEventListener('click', nextQuestion);

    quizPrev.addEventListener('click', prevQuestion);

    quizSubmit.addEventListener('click', (evt) => {
        evt.preventDefault();

        if (form.checkValidity()) {
            quizSend = true;
            currentQuestion();
        } else {
            quizAlert.style.display = 'block';
        }
    })

    quizReset.addEventListener('click', () => {
        quizSend = false;
        currentQuestion(0);
    })
}