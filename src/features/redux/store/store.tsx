import { configureStore } from "@reduxjs/toolkit";

import {
    modalsSlice,
    tasksSlice,
    valuesSlice,
} from "./slices";


export const store = configureStore({
    reducer: {
        modals: modalsSlice.reducer,
        tasks: tasksSlice.reducer,
        values: valuesSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;