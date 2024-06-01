import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "./features/carousel/carouselSlice";
import stylesSlice from "./features/styles/stylesSlice";

export const store = configureStore({
    reducer: {
        carouselReducer: carouselSlice.reducer,
        stylesReducer: stylesSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
