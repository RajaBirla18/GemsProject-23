import { createSlice } from "@reduxjs/toolkit";


export const sumSlice = createSlice({
    name:"Sum",
    initialState : {sumData: 0},
    reducers:{
        increment: (state) => {
            console.log("====state===", state.sumData);
            state.sumData += 1;
        },

        decrement: (state) => {
            console.log("====state===", state.sumData);
            state.sumData -= 1;
        },
    },
});

export const {increment, decrement} = sumSlice.actions;

export default sumSlice.reducer;