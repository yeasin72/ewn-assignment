import React from 'react'
import Styled from 'styled-components'
import CheckboxWithtext from '../CheckboxWithtext/CheckboxWithtext'
import ToggleText from '../ToggleText/ToggleText'
import { useDispatch, useSelector } from 'react-redux';
import { addAllItems, removeItem } from '../../../store/features/selectItems';
import { sortByCalories, sortByFats, sortByName, sortByCarbsData, sortByProteinData } from '../../../store/features/nurtirionManagement';

/** List heading Style */
const ListHeader = Styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 40% 15% 15% 15% 15%;
    background-color: var(--brand-color);
    color: var(--headeing-color);
    padding: 13px 10px;
`
export default function ListHeading() {
    const dispatch = useDispatch()
    const { 
        selected, 
        nutritions 
    } = useSelector(state => state)
    const { 
        allnutritions, 
        sortByCal, 
        sortByFat, 
        sortByProtein, 
        sortByCarbs 
    } = nutritions

    /**
     * Select All item.
     * 
     * @returns {void}
     */
    function selectAllItems() {
        if (selected.length === allnutritions.length) {
            dispatch(removeItem([]))
            return
        }
        const allIds = allnutritions.map(ele => ele.id)
        dispatch(addAllItems(allIds))
    }

    /**
     * Diffrent type of Sorting.
     * @param {string} sortingType 
     */
    function sortingAllItems(sortingType){
        switch (sortingType) {
            case "Name":
                dispatch(sortByName(allnutritions))
                break;
            case "Calories":
                dispatch(sortByCalories(allnutritions))    
                break;
            case "Fat":
                dispatch(sortByFats(allnutritions))
                break;
                case "Carbs":
                dispatch(sortByCarbsData(allnutritions))
                break;
            default:
                dispatch(sortByProteinData(allnutritions))
                break;
        }
    }

    

    return (
        <ListHeader>
            <CheckboxWithtext
                onClick={() => sortingAllItems("Name")} 
                isClicked={selected.length === allnutritions.length && selected.length > 0} 
                selectAll={selectAllItems}>
                    Dessert
            </CheckboxWithtext>
            <ToggleText 
                onClick={() => sortingAllItems("Calories")}
                isClicked={sortByCal}>
                    Calories
            </ToggleText>
            <ToggleText
                isClicked={sortByFat}
                onClick={() => sortingAllItems("Fat")}>
                    Fat
            </ToggleText>
            <ToggleText
                isClicked={sortByCarbs}
                onClick={() => sortingAllItems("Carbs")}>
                    Carbs
            </ToggleText>
            <ToggleText
                isClicked={sortByProtein}
                onClick={() => sortingAllItems("Protein")}>
                    Protein
            </ToggleText>
        </ListHeader>
    )
}

