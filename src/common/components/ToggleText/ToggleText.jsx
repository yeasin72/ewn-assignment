import React from "react"
import Styled from "styled-components"
import PropTypes from "prop-types";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs"


// checkbox with text style
const CheckboxText = Styled.div`
    width: 100%;
    div{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        cursor: pointer;
    }
`

function ToggleText({children, isClicked = false, onClick}) {
    return (
        <CheckboxText
            role="toggletext">
            <div 
                onClick={onClick}>
                    <p>{children}</p>
                    {
                        isClicked
                        ?<BsArrowUpShort />
                        :<BsArrowDownShort />
                    }
            </div>
        </CheckboxText>
    )
}

ToggleText.prototype = {
    /** Change Icon status. */
    isClicked: PropTypes.bool,
    /** Item onClick event. */
    onClick: PropTypes.func,
}

export default ToggleText
