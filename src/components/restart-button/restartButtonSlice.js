import { createSlice } from "@reduxjs/toolkit";
import gameStoryGif from '../../images/gif_about_me.gif';
import fundoPreto from '../../images/fundo_preto.jpg';

const initialState = {
    gifState: gameStoryGif,
}

export const buttonSlice = createSlice({
    name: 'restartButton',
    initialState,
    reducers: {
        setGif: (state) => {
            state.gifState = gameStoryGif;
        },
        restartGif: (state) => {
            state.gifState = fundoPreto;
        },
    }
})

export const { setGif, restartGif } = buttonSlice.actions;

export default buttonSlice.reducer;