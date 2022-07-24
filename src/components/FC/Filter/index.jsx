import { useDispatch } from "react-redux";

import { setFilterAction } from "@/actions/filter";
import FilterWrapper from "@/components/FC/Filter/styled";
import { ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS } from "@/constants";

const filter = [
    { value: ALL_TODOS, name: "All" },
    { value: COMPLETED_TODOS, name: "Completed" },
    { value: ACTIVE_TODOS, name: "Active" },
];

export const Filter = () => {
    const dispatch = useDispatch();

    const selectChangeHandler = (e) => {
        dispatch(setFilterAction(e.target.value));
    };

    return (
        <FilterWrapper>
            <select defaultValue={ALL_TODOS} onChange={selectChangeHandler}>
                {filter.map(({ value, name }) => (
                    <option key={name} value={value}>
                        {name}
                    </option>
                ))}
            </select>
        </FilterWrapper>
    );
};
