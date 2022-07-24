import { Component } from "react";

import FilterWrapper from "@/components/Class/Filter/styled";
import { ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS } from "@/constants";

const filter = [
    { value: ALL_TODOS, name: "All" },
    { value: COMPLETED_TODOS, name: "Completed" },
    { value: ACTIVE_TODOS, name: "Active" },
];

export class Filter extends Component {
    constructor(props) {
        super(props);
    }

    selectChangeHandler = (e) => {
        this.props.setFilter(e.target.value);
    };

    render() {
        return (
            <FilterWrapper>
                <select
                    defaultValue={ALL_TODOS}
                    onChange={(e) => this.selectChangeHandler(e)}
                >
                    {filter.map(({ value, name }) => (
                        <option key={name} value={value}>
                            {name}
                        </option>
                    ))}
                </select>
            </FilterWrapper>
        );
    }
}
