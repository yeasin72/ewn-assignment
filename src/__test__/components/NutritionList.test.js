import {
    render as rtlRender, 
    screen, 
    cleanup
} from "@testing-library/react"
import NutritionList from "../../common/components/NutritionList/NutritionList";
import Data from "../../store/data/data.json";
import Store from "../../store/store"
import { Provider } from "react-redux"

/** Wrap with Redux provider component */
const componentRender = component => rtlRender(
    <Provider store={Store}>{component}</Provider>
)

describe("Nutrition list component test", () => {
    afterEach(cleanup)
    /** Passed items in the document or not */
    it("All item in the component", () => {
        componentRender(<NutritionList nutritions={Data} />)
        const elements = screen.getAllByRole("nutrition")
        expect(elements.length).toBe(Data.length)
    })

    /** Checking all child component is in the document or not */
    it("Child component check", () => {
        componentRender(<NutritionList nutritions={Data} />)
        const elements = screen.getAllByRole("nutrition")
        Data.forEach(ele => {
            const {
                name,
                calories,
                protein,
                carbs,
                fat
            } = ele
            const nameEl = screen.getAllByText(name)
            const caloriesEle = screen.getAllByText(calories)
            const proteinEle = screen.getAllByText(protein)
            const carbsEle = screen.getAllByText(carbs)
            const fatEle = screen.getAllByText(fat)
            expect(nameEl[0]).toBeInTheDocument()
            expect(caloriesEle[0]).toBeInTheDocument()
            expect(proteinEle[0]).toBeInTheDocument()
            expect(carbsEle[0]).toBeInTheDocument()
            expect(fatEle[0]).toBeInTheDocument()
        })
    })
})