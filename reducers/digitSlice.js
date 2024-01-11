import { createSlice } from "@reduxjs/toolkit";


export const digitSlice = createSlice({
    name:"DigitData",
    initialState : {digitSlice: 100},
    reducers:{
        increment: (state) => {
            console.log("====state===", state);
        },
    },
});

export const {increment} = digitSlice.actions;

export default digitSlice.reducer;