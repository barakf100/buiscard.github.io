import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken } from "../service/storageService";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
export const userData = createAsyncThunk("content/userData", async () => {
    const token = getToken();
    const dataFromToken = jwtDecode(token);
    const { data } = await axios.get(`/users/${dataFromToken._id}`);
    return data;
});
const initialState = {
    data: {},
    isAdmin: false,
};

const userData1 = createSlice({
    name: "userData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userData.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});
// export const dataActions = userData1.actions;
export default userData1.reducer;
