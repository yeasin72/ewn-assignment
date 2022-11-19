import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types';
import { BsCircle, BsCheckCircleFill } from "react-icons/bs"


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

function CheckboxWithtext({children, isClicked = false, selectAll, onClick}) {
    return (
        <CheckboxText>
            <div>
                {
                    isClicked
                    ?<BsCheckCircleFill onClick={selectAll} />
                    :<BsCircle onClick={selectAll} />
                }
                <p onClick={onClick} >{children}</p>
            </div>
        </CheckboxText>
    )
}

CheckboxWithtext.prototype = {
    /** Item Select status */
    isClicked: PropTypes.bool,
    /** Item select function */
    selectAll: PropTypes.func,
    /** Text click function. */
    onClick: PropTypes.func,
}

export default CheckboxWithtext
