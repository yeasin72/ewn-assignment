import { configureStore } from '@reduxjs/toolkit'
//import reducer
import NutritionManagement from './features/nurtirionManagement'
import SelectedItems from './features/selectItems'


// combine all reducer
const store = configureStore({ 
    reducer: {
        nutritions: NutritionManagement, 
        selected: SelectedItems
    }
})


export default store