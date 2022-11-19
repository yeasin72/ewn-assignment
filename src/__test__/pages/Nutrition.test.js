import NutritionComponent from "../../pages/Nutrition/NutritionComponent/NutritionComponent"
import {
    render as rtlRender, 
    screen, 
    cleanup, 
    fireEvent, 
    getAllByRole
} from "@testing-library/react"
import Store from "../../store/store"
import { Provider } from "react-redux"
import "jest-styled-components"; 


/** Wrap with Redux provider component */
const componentRender = component => rtlRender(
    <Provider store={Store}>{component}</Provider>
)

describe("Nutrition page test", () => {
    afterEach(cleanup)
    /** Check is item in the document */
    it("check is item in the document", () => {
        componentRender(<NutritionComponent />)
        // element in the document
        const element = screen.getByRole("nutritionpage")
        expect(element).toBeInTheDocument()
    })

    /** Check is toggle text in the document */
    it("Togggle text in the document", () => {
        componentRender(<NutritionComponent />)
        // element in the document
        const element = screen.getAllByRole("toggletext")
        expect(element.length).toBe(4)
        element.forEach(ele => {
            fireEvent.click(ele)
        })
    })
    
    /** Checkbox With text Component in the document */
    it("Checkbox With text Component in the document", () => {
        componentRender(<NutritionComponent />)
        // element in the document
        const element = screen.getByRole("checkboxwithtext")
        expect(element).toBeInTheDocument()
        fireEvent.click(screen.getByText("Dessert"))
    })


    /** List Footer Component in the document */
    it("List Footer Component in the document", () => {
        componentRender(<NutritionComponent />)
        // element in the document
        const element = screen.getByRole("listfooter")
        expect(element).toBeInTheDocument()
        expect(screen.getByText("Row per page")).toBeInTheDocument()
    })

    /** Style test */
    it("Style test", () => {
        componentRender(<NutritionComponent />)
        // element in the document
        const element = screen.getByRole("nutritionpage")
        expect(element).toHaveStyle(`
        width: 100%;
        height: auto;
        min-height: 500px;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        `)
    })
})