import { SET_FILTER } from "@/constants";
import { ALL_TODOS } from "@/constants";

const defaultState = ALL_TODOS;

export const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};
