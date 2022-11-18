export const STORAGE_KEY = 'nutritions';

/**
 * String to json.
 * @param {string} str 
 * @returns {any} json
 */
export function stringToJson(str) {
    return JSON.parse(str)
}

/**
 * JSON to string.
 * @param {any} json 
 * @returns {string} str
 */
export function jsonToString(json) {
    return JSON.stringify(json)
}

/**
 * Id generator.
 * @returns {string} id
 */
function generateUid() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

/**
 * Nutrition Id generator.
 * @returns {string} nutritionId
 */
export function geneRateNutritionId(){
    const strData = localStorage.getItem(STORAGE_KEY)
    const nutrition = stringToJson(strData)
    // generate id
    const newId = generateUid()
    // checking is existing or not
    if (!nutrition.find(ele => ele.id === newId)) {
        return newId
    }
    geneRateNutritionId()
}