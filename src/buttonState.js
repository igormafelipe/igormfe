import { createSlice } from '@reduxjs/toolkit';

const defaultColor = "white";
const toggleColor  = "yellow";

const initialState = {
    currentColors: [defaultColor, defaultColor, defaultColor, defaultColor, defaultColor],
}

export const buttonState = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        toggleButton: (state, action) => {
            for (color in state.currentColors) {
                color = state.defaultColor;
            }
            state.currentColors[action.payload] = toggleColor;
        },
        resetButtons: () => {
            for (color in state.currentColors) {
                color = state.defaultColor;
            }
        }
    }
})

export const { toggleButton, resetButtons } = buttonState.actions
export default buttonState.reducer