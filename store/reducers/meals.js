import * as actionType from '../actions/actions'

import { MEALS } from "../../data/dummy-data";
const initialState = {
    meals : MEALS ,
    filteredMeals :MEALS ,
    favoriteMeals : []
};
const mealsReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionType.TOGGLE_FAVORITE : 
            const existiingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if(existiingIndex >=0) {
                const updatedMeals = [...state.favoriteMeals]
                updatedMeals.splice(existiingIndex ,1) ;
                return {
                    ...state , 
                    favoriteMeals :  updatedMeals
                }
           
            }
            else {
                return {
                    ...state , 
                    favoriteMeals : state.favoriteMeals.concat(state.meals.find(meal => meal.id === action.mealId))
                }
            }
        case actionType.SET_FILTERS : 
            const appliedFilters = action.filters 
            const filteredMeals = state.meals.filter(meal => {
                if(appliedFilters.isGlutenFree && !meal.isGlutenFree) {
                    return false
                }
                if(appliedFilters.isLactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if(appliedFilters.isVegan && !meal.isVegan) {
                    return false
                }
                if(appliedFilters.isVegetarian && !meal.isVegetarian) {
                    return false
                }
                return true
            })
            return {...state , filteredMeals : filteredMeals}
        default : 
        return state
    }
}


export default mealsReducer;