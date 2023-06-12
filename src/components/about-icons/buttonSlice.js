import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    divState: ["unselected", "unselected", "unselected", "selected"],
}

export const buttonSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.divState[action.payload] = "selected";
        },
        untoggle: (state) => {
            state.divState = ["unselected", "unselected", "unselected", "unselected"];
        },
    }
})

export const { toggle, untoggle } = buttonSlice.actions;

export default buttonSlice.reducer;