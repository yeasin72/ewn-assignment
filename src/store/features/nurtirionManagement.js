import { createSlice } from '@reduxjs/toolkit'
import { geNutritions, deleteNutrition } from '../actions/nutrition'

/** Init State  */
const intiState = {
    allnutritions: [],
    limit: 5,
    page: 1,
    maxpage: 0,
    totalItem: 0,
    range: [0, 0],
    sortByname: false,
    sortByCal: false,
    sortByFat: false,
    sortByCarbs: false,
    sortByProtein: false,
}

// Nutrition slice
export const nutritionManagement = createSlice({
    name: 'nutritions',
    initialState: intiState,
    reducers: {
        /**
         * Get all Nutrition.
         * @param {object} state - Old State.
         * @returns {object} state
         */
        getAllNutritions: (state) => {
            const { length , element } = geNutritions(0, state.limit)
            return { ...state, allnutritions: element, totalItem: length, maxpage: Math.ceil(length / state.limit), range: [1, state.limit]}
        },
        /**
         * Delete Nutritions.
         * @param {object} state - Old State.
         * @param {any} action 
         * @returns {object} state
         */
        delNutritions: (state, action) => {
            const all = deleteNutrition(action.payload)
            const element = all.slice(0, state.limit)
            return { ...state, allnutritions: element, totalItem: all.length, maxpage: Math.ceil(all.length / state.limit)}
        },
        /**
         * Change per page showing item limit.
         * 
         * @param {object} state - Old State.
         * @param {any} action 
         * @returns {object} state
         */
        changeLimit: (state, action) => {
            const { length , element }  = geNutritions(0, action.payload)
            return {...state, limit: action.payload, allnutritions: element, range: [1, action.payload > length ? length : action.payload], maxpage: Math.ceil(length / action.payload)}
        },
        /**
         * Change Page.
         * 
         * @param {object} state - Old State.
         * @param {any} action 
         * @returns {object} state
         */
        nextOrBackPage: (state, action) => {
            let updatedPage;
            // if clicked on back
            if (action.payload === "back") {
                updatedPage = state.page - 1
            }else{ // if click on next.
                updatedPage = state.page + 1
            }
            if (updatedPage > state.maxpage || updatedPage < 1) {
                return {...state}
            }
            const currentRange = [(state.limit * (updatedPage -1)), (state.limit * updatedPage )]
            const { element } = geNutritions(currentRange[0], currentRange[1])
            return {...state, allnutritions: element, page: updatedPage, range: [currentRange[0]+1, currentRange[1]]}
        },

        /**
         * Sort Nutritions by name.
         * 
         * @param {object} state - Old State.
         * @param {any} action 
         * @returns {object} state
         */
        sortByName: (state, action) => {
            const prev = action.payload
            const element = [...prev]
            if (!state.sortByname) {
                element.sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) return -1
                    if (nameA > nameB) return 1
                    return 0;
                })
                return {...state, allnutritions: element, sortByname: !state.sortByname}
            }
            element.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA > nameB) return -1
                if (nameA < nameB) return 1
                return 0;
            })
            return {...state, allnutritions: element, sortByname: !state.sortByname}
        },

        /**
         * Sort Nutritions by Calories.
         * 
         * @param {object} state - Old State.
         * @param {any} action 
         * @returns {object} state
         */
        sortByCalories: (state, action) => {
            const prev = action.payload
            const element = [...prev]
            if (!state.sortByCal) {
                element.sort((a, b) => (a.calories > b.calories) ? 1 : (a.calories < b.calories) ? -1 : 0)
                return {...state, allnutritions: element, sortByCal: !state.sortByCal}
            }
            element.sort((a, b) => (a.calories < b.calories) ? 1 : (a.calories > b.calories) ? -1 : 0)
            return {...state, allnutritions: element, sortByCal: !state.sortByCal}
        },

        /**
         * Sort Nutritions by Fats.
         * 
         * @param {object} state - Old State.
         * @param {any} action 
         * @returns {object} state
         */
        sortByFats: (state, action) => {
            const prev = action.payload
            const element = [...prev]
            if (!state.sortByFat) {
                element.sort((a, b) => (a.fat > b.fat) ? 1 : (a.fat < b.fat) ? -1 : 0)
                return {...state, allnutritions: element, sortByFat: !state.sortByFat}
            }
            element.sort((a, b) => (a.fat < b.fat) ? 1 : (a.fat > b.fat) ? -1 : 0)
            return {...state, allnutritions: element, sortByFat: !state.sortByFat}
        },

        /**
         * Sort Nutritions by Carbs.
         * 
         * @param {object} state - Old State.
         * @param {any} action 
         * @returns {object} state
         */
        sortByCarbsData: (state, action) => {
            const prev = action.payload
            const element = [...prev]
            if (!state.sortByCarbs) {
                element.sort((a, b) => (a.carbs > b.carbs) ? 1 : (a.carbs < b.carbs) ? -1 : 0)
                return {...state, allnutritions: element, sortByCarbs: !state.sortByCarbs}
            }
            element.sort((a, b) => (a.carbs < b.carbs) ? 1 : (a.carbs > b.carbs) ? -1 : 0)
            return {...state, allnutritions: element, sortByCarbs: !state.sortByCarbs}
        },
        
        /**
         * Sort Nutritions by Protein.
         * 
         * @param {object} state - Old State.
         * @param {any} action 
         * @returns {object} state
         */
        sortByProteinData: (state, action) => {
            const prev = action.payload
            const element = [...prev]
            if (!state.sortByProtein) {
                element.sort((a, b) => (a.protein > b.protein) ? 1 : (a.protein < b.protein) ? -1 : 0)
                return {...state, allnutritions: element, sortByProtein: !state.sortByProtein}
            }
            element.sort((a, b) => (a.protein < b.protein) ? 1 : (a.protein > b.protein) ? -1 : 0)
            return {...state, allnutritions: element, sortByProtein: !state.sortByProtein}
        },
    }
})

// set actions
export const { 
    getAllNutritions,
    delNutritions, 
    addNewNutrition ,
    selectItem,
    changeLimit,
    nextOrBackPage,
    sortByName,
    sortByCalories,
    sortByFats,
    sortByCarbsData,
    sortByProteinData
} = nutritionManagement.actions;

export default nutritionManagement.reducer