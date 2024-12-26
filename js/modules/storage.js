// api functions
import { getQuestionFromApi, getCategoriesFromApi, getTokenFromApi } from "./api.js";

// returns categories from storage
export const getCategoriesFromStorage = async () => {
    let categories = JSON.parse(localStorage.getItem('categories'));

    // if they don't exist, retrieves categories from API
    if (!categories) {
        categories = await getCategoriesFromApi();
        localStorage.setItem('categories', JSON.stringify(categories));
    }

    return categories;
}

// returns token from storage
export const getTokenFromStorage = async () => {
    let token = JSON.parse(localStorage.getItem('token'));

    // if it doesn't exist, retrieves token from API
    if (!token) {
        token = await getTokenFromApi();
        localStorage.setItem('token', JSON.stringify(token));
    }

    return token;
}

// returns question based on storage data
export const getDataFromStorage = async (round) => {
    const token = await getTokenFromStorage();
    const categories = await getCategoriesFromStorage();
    const question = await getQuestionFromApi(token, categories[round]);

    // if it doesn't exist, reload page
    if (!question || !token || !categories)
        location.reload();

    return question;
}
