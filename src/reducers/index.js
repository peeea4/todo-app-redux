import { combineReducers } from "redux";

import { filterReducer } from "@/reducers/filter";
import { modalReducer } from "@/reducers/modal";
import { todosReducer } from "@/reducers/todos";

export const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
    modal: modalReducer,
});
