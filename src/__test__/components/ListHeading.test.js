import {render as rtlRender, screen, cleanup} from "@testing-library/react"
import Store from "../../store/store"
import { Provider } from "react-redux"
import ListHeading from "../../common/components/ListHeading/ListHeading";


/** Wrap with Redux provider component */
const componentRender = component => rtlRender(
    <Provider store={Store}>{component}</Provider>
)

describe('ListHeading component test', () => {
    afterEach(cleanup)
    it('All items in there', () => {
        componentRender(<ListHeading />)
        const elements = screen.getAllByRole('toggletext')
        const checkboxWithText = screen.getByRole('checkboxwithtext')
        expect(elements.length).toBe(4)
        expect(checkboxWithText).toBeInTheDocument()
        expect(checkboxWithText.textContent).toBe("Dessert")
        const toggleTextElement = ["Calories", "Fat", "Carbs", "Protein"]
        elements.forEach((ele, index) => {
            expect(ele.textContent).toBe(toggleTextElement[index])
        })
    })
})