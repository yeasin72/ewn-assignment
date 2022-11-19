import {
    render as rtlRender, 
    screen, 
    cleanup
} from "@testing-library/react"
import Store from "../../store/store"
import { Provider } from "react-redux"
import ListFooter from '../../common/components/ListFooter/ListFooter';
import "jest-styled-components"; 


/** Wrap with Redux provider component */
const componentRender = component => rtlRender(
    <Provider store={Store}>{component}</Provider>
)


describe("ListFooter component test", () => {
    afterEach(cleanup)
    /** Component all items check */
    it("All items in there", () => {
        componentRender(<ListFooter />)
        const innerText = screen.getByText('Row per page')
        const selectElement = screen.getAllByRole("option")
        const buttonElements = screen.getAllByRole("navButton")
        expect(innerText).toBeInTheDocument()
        expect(selectElement.length).toBe(4)
        expect(buttonElements.length).toBe(2)
        const allOptions = ["5", "10", "20", "50"]
        selectElement.forEach((ele, idx) => {
            expect(ele.textContent).toBe(allOptions[idx])
        })
    })
    
    /** Component style test */
    it("Component style test", () => {
        componentRender(<ListFooter />)
        const element = screen.getByRole("listfooter")
        const buttonElements = screen.getAllByRole("navButton")
        expect(element).toHaveStyle(`
        width: 100%;
        display: flex;
        flex-direction: row;
        height: auto;
        align-items: center;
        justify-content: flex-end;
        padding: 15px;
        gap: 20px;
        `);
        buttonElements.forEach(ele => {
            expect(ele).toHaveStyle(`
            border: 0px;
            padding: 10px;
            border-radius: 7px;
            margin-left: 10px;
            cursor:pointer;
            `)
        })
    })
})