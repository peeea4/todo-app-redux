import { useDispatch } from "react-redux";

import { deleteTodoAction, toggleTodoAction } from "@/actions/todos";
import deleteIcon from "@/assets/delete.png";
import {
    ContentWrapper,
    DeleteTaskWrapper,
    StatusWrapper,
    TextWrapper,
    ToDoItemWrapper,
} from "@/components/FC/ToDoItem/styled";

export const ToDoItem = ({ id, title, description, isCompleted }) => {
    const dispatch = useDispatch();

    const statusClickHandler = () => {
        dispatch(toggleTodoAction(id));
    };

    const deleteTaskClick = () => {
        dispatch(deleteTodoAction(id));
    };

    return (
        <ToDoItemWrapper>
            <ContentWrapper
                className={isCompleted ? "completed" : ""}
                onClick={statusClickHandler}
            >
                <StatusWrapper className="status" />
                <TextWrapper>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </TextWrapper>
                <DeleteTaskWrapper onClick={deleteTaskClick}>
                    <img src={deleteIcon} alt="delete task" />
                </DeleteTaskWrapper>
            </ContentWrapper>
        </ToDoItemWrapper>
    );
};
