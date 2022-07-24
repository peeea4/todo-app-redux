import { SET_FILTER } from "@/constants";

export const setFilterAction = (filter) => ({
    type: SET_FILTER,
    filter,
});
