import LayoutWithHeader from "../../layouts/LayoutWithHeader"
import {
    render as rtlRender, 
    screen, 
    cleanup
} from "@testing-library/react"
import Store from "../../store/store"
import { Provider } from "react-redux"
import "jest-styled-components"; 


/** Wrap with Redux provider component */
const componentRender = component => rtlRender(
    <Provider store={Store}>{component}</Provider>
)

describe("Layout with header component test", () => {
    afterEach(cleanup)
    it("Component inner test", () => {
        componentRender(<LayoutWithHeader>Child</LayoutWithHeader>)
        const element = screen.getByText("Child")
        expect(element).toBeInTheDocument()
    })
})