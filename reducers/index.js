import { combineReducers } from "@reduxjs/toolkit";
import sumSlice from "./sumSlice";
import digitSlice from "./digitSlice";
import usersSlice from "./usersSlice";

const rootReducer = combineReducers({
    
    sumRedu: sumSlice,

    digitRedu: digitSlice,

    users: usersSlice,
});

export default rootReducer;