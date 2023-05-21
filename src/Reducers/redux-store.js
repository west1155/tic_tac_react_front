import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import gameReducer from "./game_logic";
import thunk from "redux-thunk";


let reducers = combineReducers({
    gamePage: gameReducer,
})




let store = createStore(reducers,applyMiddleware(thunk));

window.store = store
export default store;

