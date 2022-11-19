import React from "react"
import Styled from "styled-components"

// container style
const ListContainerStyle = Styled.div`
    width: 100%;
    height: auto;
    border: 1px solid var(--border-color);
    border-radius: 4px;
`;

export default function ListContainer({children}) {
    return (
        <ListContainerStyle
            role="listcontainer">
            {children}
        </ListContainerStyle>
    )
}
