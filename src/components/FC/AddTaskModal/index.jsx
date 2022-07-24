import { useState } from "react";
import { useDispatch } from "react-redux";

import { toggleModalStatusAction } from "@/actions/modal";
import { addTodoAction } from "@/actions/todos";
import {
    AddTaskModalWrapper,
    InputWrapper,
    ModalContentWrapper,
} from "@/components/FC/AddTaskModal/styled";
import { CloseModalBtn } from "@/components/FC/CloseModalBtn";
import { CreateTaskButton } from "@/components/FC/CreateTaskButton";
import { Input } from "@/components/FC/Input";

export const AddTaskModal = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskText, setTaskText] = useState("");

    const dispatch = useDispatch();

    const createTaskHandler = () => {
        dispatch(addTodoAction(taskTitle, taskText));
        dispatch(toggleModalStatusAction());
    };

    return (
        <AddTaskModalWrapper>
            <ModalContentWrapper>
                <InputWrapper>
                    <span>Title</span>
                    <Input value={taskTitle} setValue={setTaskTitle} />
                </InputWrapper>
                <InputWrapper>
                    <span>Text</span>
                    <Input value={taskText} setValue={setTaskText} />
                </InputWrapper>
                <CreateTaskButton clickHandler={createTaskHandler} />
            </ModalContentWrapper>
            <CloseModalBtn />
        </AddTaskModalWrapper>
    );
};
