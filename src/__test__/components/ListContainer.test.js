import {
    render, 
    screen, 
    cleanup
} from "@testing-library/react"
import ListContainer from "../../common/components/ListContainer/ListContainer";
import "jest-styled-components"; 

describe("List container component test", () => {
    afterEach(cleanup)

    /** Component inner item test */
    it("Inner item test", () => {
        render(<ListContainer>Child</ListContainer>)
        const element = screen.getByRole("listcontainer")
        expect(element).toBeInTheDocument()
        expect(element.textContent).toBe("Child")
    })
    
    /** Component style test.  */
    it("Style test", () => {
        render(<ListContainer>Child</ListContainer>)
        const element = screen.getByRole("listcontainer")
        expect(element).toHaveStyle(`
        width: 100%;
        height: auto;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        `)
    })
})