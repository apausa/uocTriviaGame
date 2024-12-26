export const hideQuestion = () => {
    const question = document.querySelector(".js-question");

    if (!question.classList.contains('d-none'))
        question.classList.add('d-none');
}

export const hideScore = () => {
    const score = document.querySelector(".js-score");

    if (!score.classList.contains('d-none'))
        score.classList.add('d-none');
}

export const hideNextButton = () => {
    const nextButton = document.querySelector(".js-new");

    if (!nextButton.classList.contains('d-none'))
        nextButton.classList.add('d-none');
}

export const hideBackButton = () => {
    const backButton = document.querySelector(".js-cancel");

    if (!backButton.classList.contains('d-none'))
        backButton.classList.add('d-none');
}

export const hideEmpty = () => {
    const empty = document.querySelector(".js-empty");

    if (!empty.classList.contains('d-none'))
        empty.classList.add('d-none');
}

export const hideList = () => {
    const list = document.querySelector(".js-list");

    if (!list.classList.contains('d-none'))
        list.classList.add('d-none');
}
