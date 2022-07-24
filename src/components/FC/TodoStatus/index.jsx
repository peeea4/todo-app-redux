import { useSelector } from "react-redux";

import {
    ContentWrapper,
    TodoStatusWrapper,
} from "@/components/FC/TodoStatus/styled";

export const TodoStatus = () => {
    const todosLength = useSelector((state) => state.todos).length;

    return (
        <TodoStatusWrapper>
            <ContentWrapper>Total: {todosLength}</ContentWrapper>
        </TodoStatusWrapper>
    );
};
