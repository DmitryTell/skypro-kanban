import {
    useAppDispatch,
    setCurrentModal,
    setCurrentTask,
    setErrorText,
    useUser,
    getTask,
} from "@features/";
import { Modals } from "@shared/";


export const useTaskList = () => {
    const dispatch = useAppDispatch();

    const { user } = useUser();

    const handleOpenTask = async (id: string) => {
        try {
            const data = await getTask(user.token, id);

            dispatch(setCurrentModal({ currentModal: Modals.show }));
            dispatch(setCurrentTask({ currentTask: data }));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(setCurrentModal({ currentModal: Modals.error }));
                dispatch(setErrorText({ errorText: error.message }));
            }
        }
    };

    return { handleOpenTask };
};