import { combineReducers } from "@reduxjs/toolkit";
import sumSlice from "./sumSlice";
import digitSlice from "./digitSlice";


const rootReducer = combineReducers({
    sumRedu: sumSlice,

    digitRedu: digitSlice,
});

export default rootReducer;