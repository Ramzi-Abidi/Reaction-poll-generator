import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISize {
    width: number;
    height: number;
}

export interface IPage {
    size: ISize;
    style: Object;
    key: number;
    content: string;
}

export interface initialState {
    pages: IPage[];
}

const initialState: initialState = {
    pages: [],
};

// slice creates action auto from the reducer
export const carouselSlice = createSlice({
    name: "carousel",
    initialState,
    reducers: {
        addPage(state: initialState, action: PayloadAction<IPage>) {
            state.pages = [...state.pages, action.payload];
        },
        updateTextAreaValue: (state, action: PayloadAction<IPage>) => {
            let page = state.pages.find(
                (page) => page.key === action.payload.key,
            );
            if (page) {
                page.content = action.payload.content;
            }
            console.log("Page Not Found!");
        },
        removePage() {},
    },
});

export const carouselActions = carouselSlice.actions;

export default carouselSlice;
