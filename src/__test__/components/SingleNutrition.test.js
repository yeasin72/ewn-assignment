import {render as rtlRender, screen, cleanup} from "@testing-library/react";
import SingleNutrition from "../../common/components/SingleNutrition/SingleNutrition";
import Store from "../../store/store";
import { Provider } from "react-redux";
import "jest-styled-components";

const componentRender = component => rtlRender(
    <Provider store={Store}>{component}</Provider>
)

describe("Single nutrition component test",  () => {
    afterEach(cleanup)
    const nutrition = {
        name: "Banana", 
        id: "59ds7", 
        calories: 100, 
        protein: 10, 
        carbs: 50, 
        fat: 6 
    }
    /** Data in the document */
    it("nutrition data in the document",  () => {
        componentRender(<SingleNutrition nutrition={nutrition} />)
        const nameEle = screen.getByText(/Banana/i)
        const caloriesEle = screen.getByText(/100/i)
        const proteinEle = screen.getByText("10")
        const carbsEle = screen.getByText(/50/i)
        const fatEle = screen.getByText(/6/i)
        expect(nameEle.textContent).toBe("Banana")
        expect(proteinEle.textContent).toBe("10")
        expect(caloriesEle.textContent).toBe("100")
        expect(carbsEle.textContent).toBe("50")
        expect(fatEle.textContent).toBe("6")
    })
    
    /** Major Style check */
    it("Style in the document", () => {
        componentRender(<SingleNutrition nutrition={nutrition} />)
        const element = screen.getByRole("nutrition")
        expect(element).toHaveStyle(`width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 40% 15% 15% 15% 15%;
        color: var(--text-color);
        padding: 13px 10px;
        border-bottom: 1px solid var(--border-color);`)
    })
})