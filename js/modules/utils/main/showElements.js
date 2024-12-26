export const showQuestion = () => {
    const question = document.querySelector(".js-question");

    if (question.classList.contains('d-none'))
        question.classList.remove('d-none');
}

export const showScore = () => {
    const score = document.querySelector(".js-score");

    if (score.classList.contains('d-none'))
        score.classList.remove('d-none');
}

export const showNextButton = () => {
    const nextButton = document.querySelector(".js-new");

    if (nextButton.classList.contains('d-none'))
        nextButton.classList.remove('d-none');
}

export const showBackButton = () => {
    const backButton = document.querySelector(".js-cancel");

    if (backButton.classList.contains('d-none'))
        backButton.classList.remove('d-none');
}

export const showEmpty = () => {
    const empty = document.querySelector(".js-empty");

    if (empty.classList.contains('d-none'))
        empty.classList.remove('d-none');
}

export const showList = () => {
    const list = document.querySelector(".js-list");

    if (list.classList.contains('d-none'))
        list.classList.remove('d-none');
}
