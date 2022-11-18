import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Styled from 'styled-components'
import { getAllNutritions } from '../../../store/features/nurtirionManagement'

const NutritionSection = Styled.section`
    width: 10px;
    
`
export default function NutritionComponent() {
    const dispatch = useDispatch();
    const { nutritions } = useSelector(state => state)
    
    useEffect(() => {
        dispatch(getAllNutritions())
    }, [dispatch])


    return (
        <NutritionSection>
            {nutritions.map(ele => (
                <h1 key={ele.id}>{ele.name}</h1>
            ))}
        </NutritionSection>
    )
}
