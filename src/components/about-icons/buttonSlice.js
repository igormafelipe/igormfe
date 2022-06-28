import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    color: ["yellow", "white", "white", "white"],
    divState: ["selected", "unselected", "unselected", "unselected"],
}

export const buttonSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.color[action.payload] = "yellow";
            state.divState[action.payload] = "selected";
        },
        untoggle: (state) => {
            state.color = ["white", "white", "white", "white"];
            state.divState = ["unselected", "unselected", "unselected", "unselected"];
        },
    }
})

export const { toggle, untoggle } = buttonSlice.actions;

export default buttonSlice.reducer;