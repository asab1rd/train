const CityReducer = (state, action) => {
    switch (action.type){
        case 'FETCH_POPULAR' : 
            return {
                ...state,
                popularCities : action.payload
            }
        case 'FETCH_INPUT' : 
            return {
                ...state,
                foundCities : action.payload
            }
        case 'CLICKED_INPUT' : 
            return {
                ...state,
                clickedInput : action.payload
            }
        case 'SEARCHED_WORD' : 
            return {
                ...state,
                searchedWord: action.payload
            }
        case 'DEPART_INPUT': {
            return {
                ...state,
                departInput: action.payload
            }
        }
        case 'ARRIVED_INPUT': {
            return {
                ...state,
                arrivedInput: action.payload
            }
        }
        case 'DEPART_DATE': {
            return {
                ...state,
                departDate: action.payload
            }
        }
        case 'RETURN_DATE': {
            return {
                ...state,
                returnDate: action.payload
            }
        }
        default : return state

    }
}

export default CityReducer