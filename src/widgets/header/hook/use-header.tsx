import {
    useAppDispatch,
    useAppSelector,
    getModalsState,
    setIsUserPanel,
    setCurrentModal,
} from "@/features";
import { Modals } from "@shared/";


export const useHeader = () => {
    const dispatch = useAppDispatch();

    const { isUserPanel } = useAppSelector(getModalsState);

    const handleToggleUserPanel = () => {
        dispatch(setIsUserPanel({ isUserPanel: isUserPanel ? false : true }));
    };

    const handleCreateModal = () => {
        dispatch(setCurrentModal({ currentModal: Modals.create }));
    };

    const handleQuitModal = () => {
        dispatch(setCurrentModal({ currentModal: Modals.quit }));
    };

    return {
        isUserPanel,
        handleToggleUserPanel,
        handleCreateModal,
        handleQuitModal,
    };
};