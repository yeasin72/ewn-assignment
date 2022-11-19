import React, { useEffect } from "react"
import LayoutWithHeader from "../../layouts/LayoutWithHeader"
import NutritionComponent from "./NutritionComponent/NutritionComponent"
import { getAllNutritions } from "../../store/features/nurtirionManagement"
import { useDispatch } from "react-redux"

/**
 * Nutrition page.
 */
export default function Nutrition() {
    const dispatch = useDispatch();

    /** Effect  */
    useEffect(() => {
        dispatch(getAllNutritions())
    }, [dispatch])

    return (
        <LayoutWithHeader>
            <NutritionComponent />
        </LayoutWithHeader>
    )
}
