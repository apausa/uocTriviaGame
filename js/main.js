// storage functions
import { getDataFromStorage } from "./modules/storage.js";

// cookies functions
import { getRankingFromCookie, postRankToCookie } from "./modules/cookies.js";

// utils funtions
import updatePoints from "./modules/utils/main/updatePoints.js";
import { Encoder } from "./modules/utils/encoder.js";
import { Randomizer } from "./modules/utils/randomizer.js";
import { hideBackButton, hideNextButton, hideQuestion, hideScore, hideEmpty, hideList } from "./modules/utils/main/hideElements.js";
import { showBackButton, showNextButton, showQuestion, showScore, showEmpty, showList } from "./modules/utils/main/showElements.js";

// ends game
const endGame = () => {
    hideScore();
    updatePoints(0);
}

// renders ranking
const renderRanking = () => {
    const ranking = getRankingFromCookie();
    const unorderedList = document.querySelector(".js-list");

    unorderedList.textContent = '';

    if (ranking.length > 0) {
        hideEmpty();
        showList();

        ranking.forEach(({ name, points}, index) => {
            const listItem = document.createElement("li");
            const posParagraph = document.createElement("p");
            const nameParagraph = document.createElement("p");
            const pointsParagraph = document.createElement("p");

            listItem.classList.add('scoreboard__item');
            posParagraph.classList.add('scoreboard__pos');
            nameParagraph.classList.add('scoreboard__name');
            pointsParagraph.classList.add('scoreboard__points');

            posParagraph.textContent = index + 1;
            nameParagraph.textContent = name;
            pointsParagraph.textContent = `${points} pts`;
            
            listItem.appendChild(posParagraph);
            listItem.appendChild(nameParagraph);
            listItem.appendChild(pointsParagraph);
            unorderedList.appendChild(listItem);
        })
    } else {
        showEmpty();
        hideList();
    }
}

// saves rank
const saveRank = () => {
    const name = document.querySelector(".js-username").value;
    const points = document.querySelector(".js-points").textContent;

    if (name.split('').length > 0) {
        postRankToCookie(points, name);
        renderRanking();
        endGame()
    } else {
        alert('Wrong input. Try again');
    }
}

// renders the score element
const renderScore = () => {
    hideBackButton();
    showNextButton();

    hideQuestion();
    showScore();
}

// returns the possible answers
const renderAnswers = ({correct_answer, incorrect_answers }, checkAnswer) => {
    const options = [correct_answer, ...incorrect_answers];
    const answers = document.createElement("ul");

    // randomizes array
    Randomizer.randomizeArray(options).forEach((option) => {
        const listItem = document.createElement("li");
        
        listItem.textContent = Encoder.htmlEntitiesDecode(option);
        listItem.classList.add('question__option');
        listItem.setAttribute('data-value', option);
        listItem.addEventListener("click", (e) => checkAnswer(e, correct_answer));

        answers.appendChild(listItem);
    });

    return answers;
}

// returns the statement element
const renderStatement = ({question}) => {
    const statement = document.createElement("h3");

    // decodes string
    statement.textContent = Encoder.htmlEntitiesDecode(question);
    statement.classList.add('question__statement');

    return statement;
};

// renders question each turn
const renderQuestion = async (round, points) => {
    const checkAnswer = (e, correct_answer) => {
        round = round + 1;

        // if answer is correct, updates points
        if (e.target.getAttribute('data-value') === correct_answer) {
            points = points + 2; 

            updatePoints(points);

            alert("Correct answer!");
        } else {
            alert(`Wrong answer. The right answer is: "${Encoder.htmlEntitiesDecode(correct_answer)}"`);
        }

        // if game has ended, renders the score element
        (round < 5) ? renderQuestion(round, points) : renderScore(points);
    }

    // retrieves question
    const question = await getDataFromStorage(round);
    const element = document.querySelector(".js-question");
    const statement = renderStatement(question);
    const answers = renderAnswers(question, checkAnswer);
        
    answers.classList.add('question__answers');
    element.textContent = "";
    element.appendChild(statement);
    element.appendChild(answers);
}

// starts game
const startGame = () => {
    let [round, points] = [0, 0];

    showBackButton();
    hideNextButton();

    updatePoints(points);
    showQuestion();
    hideScore();
    renderQuestion(round, points);
}

// resets game
const resetGame = () => {
    hideBackButton();
    showNextButton();

    hideQuestion();
    updatePoints(0);
}

// renders the initial page
(() => {
    const nextButton = document.querySelector(".js-new");
    const backButton = document.querySelector(".js-cancel");
    const saveButton = document.querySelector(".js-save");
    const discardButton = document.querySelector(".js-discard");

    renderRanking();
    hideBackButton();
    hideQuestion();
    hideScore();
    
    updatePoints(0);

    nextButton.addEventListener("click", () => startGame());
    backButton.addEventListener("click", () => resetGame());
    saveButton.addEventListener("click", () => saveRank());
    discardButton.addEventListener("click", () => endGame());
})();
