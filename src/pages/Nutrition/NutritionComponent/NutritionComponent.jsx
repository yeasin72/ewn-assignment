import { useSelector } from "react-redux"
import Styled from "styled-components"
import ListContainer from "../../../common/components/ListContainer/ListContainer"
import ListFooter from "../../../common/components/ListFooter/ListFooter"
import ListHeading from "../../../common/components/ListHeading/ListHeading"
import NutritionList from "../../../common/components/NutritionList/NutritionList"


// Nutrition Section style.
const NutritionSection = Styled.section`
    width: 100%;
    height: auto;
    min-height: 500px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
export default function NutritionComponent() {
    const { nutritions } = useSelector(state => state)
    const { allnutritions } = nutritions
    

    return (
        <NutritionSection
            role="nutritionpage">
            <ListContainer>
                <ListHeading />
                <NutritionList nutritions={allnutritions} />
                <ListFooter />
            </ListContainer>
        </NutritionSection>
    )
}
