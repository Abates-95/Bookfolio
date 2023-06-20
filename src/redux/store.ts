// Store is a mini temp,in the middle Data Base

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlice";

export const store = configureStore({
    reducer,
    devTools: true,
})