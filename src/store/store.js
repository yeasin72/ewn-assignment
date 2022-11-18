import { configureStore } from '@reduxjs/toolkit'
//import reducer
import NutritionManagement from './features/nurtirionManagement'


// combine all reducer
const store = configureStore({ 
    reducer: {
        nutritions: NutritionManagement
    }
})


export default store