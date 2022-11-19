import { createSlice } from "@reduxjs/toolkit"
const intiState = []

// Nutrition slice
export const selectedItems = createSlice({
    name: "selectedItems",
    initialState: intiState,
    reducers: {
        selectItem: (state, action) => {
            return [...state, action.payload]
        },
        removeItem: (state, action) => {
            return action.payload
        },
        addAllItems: (state, action) => {
            return action.payload
        }
    }
})

// set actions
export const { 
    selectItem,
    removeItem,
    addAllItems
} = selectedItems.actions;

export default selectedItems.reducer