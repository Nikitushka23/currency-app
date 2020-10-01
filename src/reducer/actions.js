const url = 'https://api.exchangeratesapi.io/latest?base=USD'

export const fetchCurr = () => {
    return async (dispatch) => {
        const response = await fetch(url)
        const json = await response.json()
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

export const setBase = (base) => {
    return{
        type: "SET_BASE",
        payload: base
    }
}

export const setTarget = target => {
    return{
        type: "SET_TARGET",
        payload: target
    }
}