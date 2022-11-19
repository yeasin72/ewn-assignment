import React from "react"
import Styled from "styled-components"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { changeLimit, nextOrBackPage } from "../../../store/features/nurtirionManagement";

const FooterSection = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: auto;
    align-items: center;
    justify-content: flex-end;
    padding: 15px;
    gap: 20px;
    select{
        width: 67px;
        margin-left: 10px;
        background: var(--background-color);
        border: 1px solid var(--border-color);
        border-radius: 5px;
        font-size: 16px;
        color: var(--text-color);
        padding: 4px 10px;
        &:focus{
            outline: none;
        }
    }
`
/** Navigation button style */
const NavigationButtonStyle = Styled.button`
    border: 0px;
    padding: 10px;
    border-radius: 7px;
    margin-left: 10px;
    color: var(--heading-color);
    cursor:pointer;
    background-color: ${props => props.isDisable ? "#4f6197" : "var(--brand-color)"};
`

export default function ListFooter() {
    const dispatch = useDispatch()
    const { page, maxpage, totalItem, range } = useSelector(state => state.nutritions)

    /**
     * Change Page limit.
     * @param {string} limit 
     */
    function changePagePerLimit(limit) {
        dispatch(changeLimit(parseInt(limit)))
    }

    /**
     * Change page.
     * @param {string} navigationType 
     */
    function changePage(navigationType) {
        dispatch(nextOrBackPage(navigationType))
    }

    return (
        <FooterSection
            role="listfooter">
            <div>
                Row per page 
                <select
                    onChange={e => changePagePerLimit(e.target.value)}>
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                </select>
            </div>
            <div>{range[0]} - {range[1]} of {totalItem}</div>
            <div>
                <NavigationButtonStyle
                    role="navButton"
                    isDisable={page <= 1} 
                    onClick={() => changePage("back")}>
                        <BsChevronLeft />
                </NavigationButtonStyle>
                <NavigationButtonStyle 
                    role="navButton"
                    isDisable={page >= maxpage} 
                    onClick={() => changePage("next")}>
                        <BsChevronRight />
                </NavigationButtonStyle>
            </div>
        </FooterSection>
    )
}

