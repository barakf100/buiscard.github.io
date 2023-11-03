import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
};

const nameSlice = createSlice({
    name: "aa",
    initialState,
    reducers: {
        name: initialState.name,
    },
});

export default nameSlice.reducer;
