import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Modals } from "@shared/";


export interface IModalsProps {
    isUserPanel: boolean;
    currentModal: Modals;
}

const initialState: IModalsProps = {
    isUserPanel: false,
    currentModal: Modals.none,
};

export const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        setIsUserPanel(state, action: PayloadAction<{ isUserPanel: boolean }>) {
            const { isUserPanel } = action.payload;

            state.isUserPanel = isUserPanel;
        },
        setCurrentModal(state, action: PayloadAction<{ currentModal: Modals }>) {
            const { currentModal } = action.payload;

            state.currentModal = currentModal;
        },
    },
});

export const { setIsUserPanel, setCurrentModal } = modalsSlice.actions;