import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage";

import { reducer } from "./reducer";

const persistedState = loadState()

export let store = createStore(
  reducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
    saveState(store.getState())
})