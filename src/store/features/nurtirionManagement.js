import { createSlice } from '@reduxjs/toolkit'
import { geNutritions, deleteNutrition, addNutrition } from '../actions/nutrition'
const intiState = []

// Nutrition slice
export const nutritionManagement = createSlice({
    name: 'nutritions',
    initialState: intiState,
    reducers: {
        getAllNutritions: () => {
            return geNutritions()
        },
        delNutritions: (state, action) => {
            return deleteNutrition(action.payload)
        },
        addNewNutrition: (state, action) => {
            return addNutrition(action.payload)
        }
    }
})

// set actions
export const { 
    getAllNutritions,
    delNutritions, 
    addNewNutrition 
} = nutritionManagement.actions;

export default nutritionManagement.reducer