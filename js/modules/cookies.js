
// utils functions
import getCookie from './utils/cookies/getCookie.js';
import setCookie from './utils/cookies/setCookie.js';

// returns ranking from cookie
export const getRankingFromCookie = () => {
    let ranking = JSON.parse(getCookie('ranking'));

    // if ranking does not exist, creates it
    if (!ranking) {
        ranking = [];
        setCookie('ranking', JSON.stringify(ranking));
    }

    return ranking;
};

// assigns rank to cookie
export const postRankToCookie = (points, name) => {
    let ranking = getRankingFromCookie();

    // sorts array in a decreasing order
    ranking.push({name, points});
    ranking.sort((a, b) => b.points - a.points);

    setCookie('ranking', JSON.stringify(ranking));
};
