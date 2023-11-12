import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../pages/profile/userData/userData";

// Create user slice
const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
        error: null,
    },
    reducers: {
        setData(state) {
            state.userData = userData();
        },
    },
});

// Export actions and reducer
export default userSlice.reducer;
