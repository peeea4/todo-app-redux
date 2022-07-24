import { useDispatch } from "react-redux";

import { toggleModalStatusAction } from "@/actions/modal";
import { AddTaskButtonWrapper } from "@/components/FC/AddTaskButton/styled";

export const AddTaskButton = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(toggleModalStatusAction());
    };

    return (
        <AddTaskButtonWrapper onClick={clickHandler}>
            <span>+</span>
        </AddTaskButtonWrapper>
    );
};
