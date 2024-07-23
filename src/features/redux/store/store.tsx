import { configureStore } from "@reduxjs/toolkit";

import { modalsSlice, tasksSlice } from "./slices";


export const store = configureStore({
    reducer: {
        modals: modalsSlice.reducer,
        tasks: tasksSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;