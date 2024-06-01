import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    styles: {
        page: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f1f1f1",
        },
        section: {
            borderRadius: "8px",
            margin: 30,
            padding: 25,
            backgroundColor: "#FFF",
            color: "#000",
        },
        image: {
            width: 60,
            marginBottom: 20,
        },
        text: {
            fontSize: 45,
            fontWeight: "bold",
        },
        introSection: {
            borderRadius: "8px",
            margin: 30,
            padding: 50,
            backgroundColor: "#FFF",
            color: "#000",
        },
        backgroundPage: {
            position: "absolute",
            minWidth: "100%",
            minHeight: "100%",
            display: "flex",
            height: "100%",
            width: "100%",
        },
        fullView: {
            height: "100%",
            width: "100%",
        },
        title: {
            fontSize: "20px",
            lineHeight: "1.5px",
            marginTop: "20px",
        },
        userName: {
            fontSize: "15px",
            fontWeight: "bold",
            color: "#666",
            marginBottom: "5px",
        },
        userNameContainer: {
            display: "flex",
            flexDirection: "column",
            paddingLeft: "5px",
        },
    },
    pageStyles: {
        size: { width: 1080, height: 1350 },
    },
};

export const stylesSlice = createSlice({
    name: "styles",
    initialState,
    reducers: {},
});

export default stylesSlice;
