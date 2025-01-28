import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bookSlice";

const appStore = configureStore({
    reducer:{
        books: reducer
    }
});
export default appStore;