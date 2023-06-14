import { createSlice } from "@reduxjs/toolkit";

// To do: Fix default link and initial state.

const defaultLink = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets-ucg.meredithcorp.io%2F56d5c51f394b5b441fd27c1ef2e639d4%2F4591982.jpg&w=1200&h=678&c=sc&poi=face&q=60";

const initialState = {
    showing: false, 
    imageSrc: defaultLink,
    title: "ARROZ DOCE",
    bodyText: "MEU PAI AMADO ",
}

export const favoriteSlice = createSlice({
    name: 'favoriteDisplay',
    initialState,
    reducers: {
        show: (state, action) => {
            state.showing = true;
            state.imageSrc = action.payload.coverimg;
            state.title = action.payload.title;
            state.bodyText = action.payload.body;
            state.imageArray = action.payload.images;
            state.skills = action.payload.skills;
        },
        hide: (state) => {
            state.showing = false;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setBody: (state, action) => {
            state.bodyText = action.payload;
        },
        setProjectOffset: (state, action) => {
            state.offset = action.payload;
        },
    }
});

export const { show, hide, setTitle, setBody, setProjectOffset } = favoriteSlice.actions;

export default favoriteSlice.reducer;