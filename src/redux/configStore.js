import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../../src/redux/loader/LoaderSlice"
export const store = configureStore({
    reducer : {
        loader : loaderReducer
    }
});