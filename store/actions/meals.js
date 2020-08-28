import * as actionType from './actions'
export const toggleFavorite =(id
    ) => {

    return {
        type : actionType.TOGGLE_FAVORITE , mealId : id 
    }
}

export const setFilters = filterSettings => {
    return {
        type : actionType.SET_FILTERS , 
        filters : filterSettings
    }
}