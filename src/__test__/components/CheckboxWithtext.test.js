import {
    render, 
    screen, 
    cleanup
} from "@testing-library/react"
import CheckboxWithtext from "../../common/components/CheckboxWithtext/CheckboxWithtext";
import "jest-styled-components"; 

describe("Checkbox With text component test", () => {
    afterEach(cleanup)

    /** Component inner item test */
    it("Inner item test", () => {
        render(<CheckboxWithtext>Child</CheckboxWithtext>)
        const element = screen.getByRole("checkboxwithtext")
        const textElement = screen.getByText("Child")
        expect(element).toBeInTheDocument()
        expect(textElement).toBeInTheDocument()
        expect(textElement.textContent).toBe("Child")
    })
    
    /** Component style test.  */
    it("Style test", () => {
        render(<CheckboxWithtext>Child</CheckboxWithtext>)
        const element = screen.getByRole("checkboxwithtext")
        expect(element).toHaveStyle(`
        width: 100%;
        `)
    })
})