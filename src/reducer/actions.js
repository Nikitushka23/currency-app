const url = 'https://api.exchangeratesapi.io/latest?base=USD'

export const fetchCurr = () => {
    return async (dispatch) => {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        dispatch({type: 'FETCH_CURRENCY', payload: json})
        if(Object.keys(json.rates).length > 0) {
            dispatch({type: "SET_DEFAULT", payload: Object.keys(json.rates)})
        }
    }
}

export const setDefault = (defaultArray) => {
    return async (dispatch) => {
    dispatch({type: 'SET_DEFAULT', payload: defaultArray})
    }
}

export const favouriteAction = (type, id) => {
    return type === 'add' ? {type: 'addFavourite', payload: id} : {type: 'removeFavourite', payload: id}
}