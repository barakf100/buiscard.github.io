import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import authSlice from "./authSlice";
import darkThemeSlice from "./darkThemeSlice";
import userDataSlice from "./userDataSlice";
const store = configureStore({
    reducer: {
        counterSlice,
        authSlice,
        darkThemeSlice,
        userDataSlice,
    },
});

export default store;
