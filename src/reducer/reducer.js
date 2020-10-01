const InitialState = {
  curr: {},
  all: [],
  favourites: [],
  selectedBase: null,
  selectedTarget: null,
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_CURRENCY":
      return {
        ...state,
        curr: action.payload,
      };
    case "SET_DEFAULT":
      return {
        ...state,
        all: [...new Set([...state.all, ...action.payload])],
      };
    case "addFavourite": {
      let { all, favourites } = state;
      let newAll = new Set([...all]);
      newAll.delete(action.payload)
      const  newFavourites = [...new Set([...favourites, action.payload])];
      return {
        ...state,
        all: [...newAll],
        favourites: [...newFavourites],
      };
    }
    case "removeFavourite": {
        let { all, favourites } = state;
        let newAll = [...new Set([...all, action.payload])];
        let newFavourites = new Set([...favourites]);
        newFavourites.delete(action.payload)
        return {
          ...state,
          all: [...newAll],
          favourites: [...newFavourites],
        };
    }
    case "SET_BASE":
        return{
          ...state,
          selectedBase: action.payload
        }
        case "SET_TARGET":
        return{
          ...state,
          selectedTarget: action.payload
        }
    default:
      return state;
  }
};
