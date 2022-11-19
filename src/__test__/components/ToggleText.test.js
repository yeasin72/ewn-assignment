import {
    render, 
    screen, 
    cleanup
} from "@testing-library/react"
// component
import ToggleText from "../../common/components/ToggleText/ToggleText";


describe("Toggle text component test", () => {
    afterEach(cleanup)
    // Children pass
    it("children test", () => {
        render(<ToggleText>Heading</ToggleText>)
        const toogleTextChildren = screen.getByText(/Heading/i);
        expect(toogleTextChildren).toHaveTextContent("Heading")
    })
})