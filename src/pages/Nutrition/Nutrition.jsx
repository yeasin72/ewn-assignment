import React from 'react'
import LayoutWithHeader from '../../layouts/LayoutWithHeader'
import NutritionComponent from './NutritionComponent/NutritionComponent'

/**
 * Nutrition page.
 */
export default function Nutrition() {
    return (
        <LayoutWithHeader>
            <NutritionComponent />
        </LayoutWithHeader>
    )
}
