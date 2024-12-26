// constants
import {CATEGORY_LIST} from '../../consts/category-list.js'

// filters out categories based on constant
export default function filterCategories (trivia_categories) {
    return trivia_categories
        .map(({id, name}) => ((CATEGORY_LIST.includes(name)) ? id : null))
        .filter(Boolean);
}
