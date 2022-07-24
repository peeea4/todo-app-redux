import { TOGGLE_MODAL_ADD } from "@/constants";

const defaultState = {
    addTaskModal: false,
};

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL_ADD:
            return {
                ...state,
                addTaskModal: !state.addTaskModal,
            };
        default:
            return state;
    }
};
