import { TOGGLE_TODO_STATUS } from "@/constants";
import { DELETE_TODO } from "@/constants";
import { ADD_TODO } from "@/constants";

export const defaultState = [
    {
        id: 1,
        title: "Example 1",
        description: "lorem",
        isCompleted: true,
    },
    {
        id: 2,
        title: "Example 2",
        description: "lorem lorem ",
        isCompleted: false,
    },
    {
        id: 3,
        title: "Example 3",
        description: "lorem lorem lorem ",
        isCompleted: true,
    },
];

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: Math.random().toString(36).substring(2, 9),
                    title: action.title,
                    description: action.description,
                    isCompleted: false,
                },
            ];
        case DELETE_TODO:
            return state.filter((task) => task.id !== action.id);
        case TOGGLE_TODO_STATUS:
            return state.map((task) =>
                task.id === action.id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task,
            );
        default:
            return state;
    }
};
