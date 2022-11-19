import { jsonToString, STORAGE_KEY, stringToJson } from "../../utils/nutrition";
import Data from '../data/data.json'


/**
 * Get data form local storage.
 * @returns {object[]} nutrition.
 */
function getDataFromLocalStorage() {
    const strData = localStorage.getItem(STORAGE_KEY)
    const nutrition = stringToJson(strData)
    return nutrition
}


/**
 * Get Nutrition.
 * @returns {object[]} state
 */
export function geNutritions(start, end) {
    const strData = localStorage.getItem(STORAGE_KEY)
    // if storage is empty.
    if (!strData) {
        localStorage.setItem(STORAGE_KEY, jsonToString(Data))
        return Data
    }
    const nutrition = stringToJson(strData)
    return { element: nutrition.slice(start, end), length: nutrition.length}
}

/**
 * Delete Nutrition.
 * @param {string[]} itemIds
 * @returns {object[]}
 */
export function deleteNutrition(itemIds) {
    const nutrition = getDataFromLocalStorage()
    const updatedNutrition = nutrition.filter(ele => !itemIds.includes(ele.id))
    // after delete update storage data.
    localStorage.setItem(STORAGE_KEY, jsonToString(updatedNutrition))
    return updatedNutrition
}

/**
 * Add Nutrition.
 * @param {object} nutrition
 * @returns {object[]} state
 */
// export function addNutrition({name, calories, fat, carbs, protein}) {
//     const nutrition = getDataFromLocalStorage()
//     const id = geneRateNutritionId()
//     nutrition.push({
//         id,
//         name,
//         calories,
//         fat,
//         carbs,
//         protein
//     })
//     localStorage.setItem(STORAGE_KEY, jsonToString(nutrition))
//     return nutrition
// }

const food = [{ name: "Banana"}, {name: "Orange"}, { name: "Apple"}, {name:  "Mango"}];
food.sort((a, b) => a.name - b.name)
console.log(food);