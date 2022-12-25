import { combineReducers } from "redux";
import { dataReducer } from "./reducer.js";

// we will be able access redux store from this

const rootReducer = combineReducers({
    datas: dataReducer
});

export default rootReducer;