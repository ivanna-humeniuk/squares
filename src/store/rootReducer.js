import { combineReducers } from "redux";
import { squaresReducer as squares } from "./square/reducer";
import { uiReducer as ui } from "./ui/reducer";

const rootReducer = combineReducers({
    squares,
    ui
});

export default rootReducer;
