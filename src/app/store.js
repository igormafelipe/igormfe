import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../components/about-icons/buttonSlice";
import restartButtonSlicer from "../components/restart-button/restartButtonSlice";
import favoriteSlice from "../components/favorite-content/FavoriteDisplaySlicer";
import workInfoSlice from "../components/workinfo-carousel/WorkInfoSlicer";

export const store = configureStore ({
    reducer: {
        button: buttonReducer,
        restartButton: restartButtonSlicer,
        favoriteSlice: favoriteSlice,
        workInfo: workInfoSlice,
    }
})