import { createSlice } from "@reduxjs/toolkit";
import gameStoryGif from '../../images/gif_about_me.gif';
import fundoPreto from '../../images/fundo_preto.jpg';

const initialState = {
    isTogled: false,
    togled: 0,
    togledClass: "h-1/6 w-2/6 xl:h-1/6 xl:w-1/6 bg-black border-2 rounded flex flex-row items-center justify-center hover:cursor-pointer hover:bg-gray-200 transition-all group hidden",
    untogledClass: "h-1/6 w-2/6 xl:h-1/6 xl:w-1/6 bg-black border-2 rounded flex flex-row items-center justify-center hover:cursor-pointer hover:bg-gray-200 transition-all group",
}

export const workInfoSlice = createSlice({
    name: 'workInfo',
    initialState,
    reducers: {
        togle: (state, action) => {
            state.togled = action.payload;
            state.isTogled = true;
        },
        untogle: (state) => {
            state.isTogled = false;
        },
    }
})

export const { togle, untogle } = workInfoSlice.actions;

export default workInfoSlice.reducer;