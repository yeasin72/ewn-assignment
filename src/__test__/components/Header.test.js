import {
    render as rtlRender, 
    screen, 
    cleanup
} from "@testing-library/react"
import Store from "../../store/store"
import { Provider } from "react-redux"
import Header from "../../common/components/Header/Header";
import "jest-styled-components"; 


/** Wrap with Redux provider component */
const componentRender = component => rtlRender(
    <Provider store={Store}>{component}</Provider>
)


describe("Header component test", () => {
    afterEach(cleanup)
    /** Component all items check */
    it("All items in there", () => {
        componentRender(<Header />)
        const element = screen.getByRole("header")
        const textItem = screen.getByRole("headingtext")
        expect(element).toBeInTheDocument()
        expect(textItem.textContent).toBe("Nutrition")
    })
    
    /** Component style test */
    it("Component style test", () => {
        componentRender(<Header />)
        const element = screen.getByRole("header")
        const textItem = screen.getByRole("headingtext")
        expect(element).toHaveStyle(`
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        border-bottom: 1px solid #535353;
        box-sizing: border-box;
        `)
        expect(textItem).toHaveStyle(`
        font-size: 30px;
        color: var(--brand-color);
        `)
    })
})