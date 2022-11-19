import React from "react"
import Styled from "styled-components"
import CheckboxWithtext from "../CheckboxWithtext/CheckboxWithtext"
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, selectItem } from "../../../store/features/selectItems";



// Single Nutrition Style
const SingleNutritionSection = Styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 40% 15% 15% 15% 15%;
    color: var(--text-color);
    padding: 13px 10px;
    border-bottom: 1px solid var(--border-color);
    &:hover{
        background-color: #16263c;
    }
`
// p style
const InnerPstyle = Styled.p`
    margin-left:10px;
`

function SingleNutrition({nutrition}) {
    const dispatch = useDispatch()
    const { selected } = useSelector(state => state)
    const { 
        name, 
        id, 
        calories, 
        protein, 
        carbs, 
        fat 
    } = nutrition


    /**
     * 
     * @param {string} id 
     * @returns {any} dispatch
     */
    function toggleItem(id) {
        if (selected.includes(id)) {
            const restofItem = selected.filter(ele => ele !== id)
            dispatch(removeItem(restofItem))
            return
        }
        dispatch(selectItem(id))
    }


    return (
        <SingleNutritionSection
            role="nutrition">
                <CheckboxWithtext 
                    isClicked={selected.includes(id)} 
                    selectAll={() => toggleItem(id)}>
                        {name}
                </CheckboxWithtext>
                <div><InnerPstyle>{calories}</InnerPstyle></div>
                <div><InnerPstyle>{fat}</InnerPstyle></div>
                <div><InnerPstyle>{carbs}</InnerPstyle></div>
                <div><InnerPstyle>{protein}</InnerPstyle></div>
        </SingleNutritionSection>
    )
}

SingleNutrition.prototype = {
    /**
     * Nutrition.
     * @property {string} name
     * @property {string} id
     * @property {number} calories
     * @property {number} protein
     * @property {number} fat
     * @property {number} carbs
     */
    nutrition: PropTypes.object.isRequired
}

export default SingleNutrition
