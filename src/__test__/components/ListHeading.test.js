import {
    render as rtlRender, 
    screen, 
    cleanup
} from "@testing-library/react"
import Store from "../../store/store"
import { Provider } from "react-redux"
import ListHeading from "../../common/components/ListHeading/ListHeading";
import "jest-styled-components"; 


/** Wrap with Redux provider component */
const componentRender = component => rtlRender(
    <Provider store={Store}>{component}</Provider>
)

describe("ListHeading component test", () => {
    afterEach(cleanup)
    /** Component all items check */
    it("All items in there", () => {
        componentRender(<ListHeading />)
        const elements = screen.getAllByRole("toggletext")
        const checkboxWithText = screen.getByRole("checkboxwithtext")
        expect(elements.length).toBe(4)
        expect(checkboxWithText).toBeInTheDocument()
        expect(checkboxWithText.textContent).toBe("Dessert")
        /** Listed items in this component or not  */
        const toggleTextElement = ["Calories", "Fat", "Carbs", "Protein"]
        elements.forEach((ele, index) => {
            expect(ele.textContent).toBe(toggleTextElement[index])
        })
    })

    /** Component style test */
    it("Component style test", () => {
        componentRender(<ListHeading />)
        const element = screen.getByRole("listheading")
        expect(element).toHaveStyle(`width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 40% 15% 15% 15% 15%;
        background-color: var(--brand-color);
        color: var(--headeing-color);
        padding: 13px 10px;`)
    })
})