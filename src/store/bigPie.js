import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import darkThemeSlice from "./darkThemeSlice";
import userDataSlice from "./userDataSlice";
const store = configureStore({
    reducer: {
        authSlice,
        darkThemeSlice,
        userDataSlice,
    },
});

export default store;
