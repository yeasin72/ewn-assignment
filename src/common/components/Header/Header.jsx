import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Styled from 'styled-components'
import { MdDelete } from 'react-icons/md';
import { delNutritions } from '../../../store/features/nurtirionManagement';
import { addAllItems } from '../../../store/features/selectItems';

// Header section style.
const HeaderSection = Styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #535353;
    box-sizing: border-box;
    div{
        display: flex;
        flex-direction: row;
        gap: 40px;
        padding-right: 20px;
        align-items: center;
    }
    svg{
        font-size: 24px;
        transition: 0.5s;
        &:hover{
            color: var(--error-color);
            cursor: pointer;
        }
    }
`;

// Heading title style
const HeadingText = Styled.h2`
    font-size: 30px;
    color: var(--brand-color);
`;

export default function Header() {
    const { selected }  = useSelector(state => state)
    const dispatch = useDispatch()

    /**
     * Delete selected items.
     */
    function deleteSelectedItems() {
        dispatch(delNutritions(selected))
        dispatch(addAllItems([]))
    }

    return (
        <HeaderSection>
            <div>
                <HeadingText>
                    Nutrition
                </HeadingText>
            </div>
            <div>
                {
                    selected.length > 0 &&
                    <>
                        <div><p>{selected.length} item selected</p></div>
                        <MdDelete onClick={deleteSelectedItems} />
                    </>
                }   
            </div>
        </HeaderSection>
    )
}
