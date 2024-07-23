import { configureStore } from "@reduxjs/toolkit";

import {
    modalsSlice,
} from "./slices";


export const store = configureStore({
    reducer: {
        modals: modalsSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;