import { geneRateNutritionId, jsonToString, STORAGE_KEY, stringToJson } from "../../utils/nutrition";
import Data from '../data/data.json'

/**
 * Get Nutrition.
 * @returns {object[]} state
 */
export function geNutritions() {
    console.log("working");
    const strData = localStorage.getItem(STORAGE_KEY)
    // if storage is empty.
    if (!strData) {
        localStorage.setItem(STORAGE_KEY, jsonToString(Data))
        return Data
    }
    const nutrition = stringToJson(strData)
    return nutrition
}

/**
 * Delete Nutrition.
 * @param {string[]} itemIds
 * @returns {object[]}
 */
export function deleteNutrition(itemIds) {
    const strData = localStorage.getItem(STORAGE_KEY)
    const nutrition = stringToJson(strData)
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
export function addNutrition({name, calories, fat, carbs, protein}) {
    const strData = localStorage.getItem(STORAGE_KEY)
    const nutrition = stringToJson(strData)
    const id = geneRateNutritionId()
    nutrition.push({
        id,
        name,
        calories,
        fat,
        carbs,
        protein
    })
    localStorage.setItem(STORAGE_KEY, jsonToString(nutrition))
    return nutrition
}
