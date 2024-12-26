// utils functions
import checkResponse from "./utils/api/checkResponse.js";
import filterCategories from "./utils/api/filterCategories.js";

// returns question from api
export const getQuestionFromApi = async (token, category) => {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=1&category=${category}&token=${token}`);
        const { response_code, results } = await response.json();

        checkResponse(response_code);

        return results[0];
    } catch (error) {
        // and alerts user if call is not successfull
        alert(`API Error: ${error.message}. Reloading page...`);

        return null;
    }
}

// returns categories from api
export const getCategoriesFromApi = async () => {
    try {
        const response = await fetch("https://opentdb.com/api_category.php");
        const {response_code, trivia_categories} = await response.json();
        
        checkResponse(response_code);
    
        return filterCategories(trivia_categories);
    } catch (error) {
        // and alerts user if call is not successfull
        alert(`API Error: ${error.message}. Reloading page...`);
        
        return null;
    }
}

// returns token from api
export const getTokenFromApi = async () => {
    try {
        const response = await fetch("https://opentdb.com/api_token.php?command=request");
        const { response_code, token } = await response.json();

        checkResponse(response_code);

        return token;
    } catch (error) {
        // and alerts user if call is not successfull
        alert(`API Error: ${error.message}. Reloading page...`);
        
        return null;
    }
}
