import { ADD_TODO, DELETE_TODO, TOGGLE_TODO_STATUS } from "@/constants";

export const addTodoAction = (title, description) => ({
    type: ADD_TODO,
    title,
    description,
});

export const deleteTodoAction = (id) => ({
    type: DELETE_TODO,
    id,
});

export const toggleTodoAction = (id) => ({
    type: TOGGLE_TODO_STATUS,
    id,
});
