import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ToDoItem } from "@/components/FC/ToDoItem";
import { ToDoListWrapper } from "@/components/FC/ToDoList/styled";
import { ACTIVE_TODOS, COMPLETED_TODOS } from "@/constants";

export const ToDoList = () => {
    const todos = useSelector((state) => state.todos);

    const [filteredTodos, setFilteredTodos] = useState(todos);

    const filter = useSelector((state) => state.filter);

    useEffect(() => {
        if (filter === COMPLETED_TODOS) {
            setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        } else if (filter === ACTIVE_TODOS) {
            setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        } else {
            setFilteredTodos(todos);
        }
    }, [filter, todos]);

    return (
        <ToDoListWrapper>
            {filteredTodos.map((todo) => (
                <ToDoItem key={todo.id} {...todo} />
            ))}
        </ToDoListWrapper>
    );
};
