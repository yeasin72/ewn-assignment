import React from 'react'
import SingleNutrition from '../SingleNutrition/SingleNutrition'
import PropTypes from 'prop-types';


function NutritionList({nutritions}) {
    return (
        <>
            {
                nutritions.map(nutrition => (
                    <SingleNutrition key={nutrition.id} nutrition={nutrition} />
                ))
            }
        </>
    )
}

NutritionList.prototype = {
    /** List of Nutritions */
    nutritions: PropTypes.object
}

export default NutritionList
