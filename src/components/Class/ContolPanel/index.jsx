import { Component } from "react";

import { AddTaskButtonContainer } from "@/components/Class/containers/AddTaskButtonContainer";
import { FilterContainer } from "@/components/Class/containers/FilterContainer";
import { TodoStatusContainer } from "@/components/Class/containers/TodoStatusContainer";
import {
    ControlPanelWrapper,
    FlexWrapper,
} from "@/components/Class/ContolPanel/styled";

export class ControlPanel extends Component {
    render() {
        return (
            <ControlPanelWrapper>
                <AddTaskButtonContainer />
                <FlexWrapper>
                    <FilterContainer />
                    <TodoStatusContainer />
                </FlexWrapper>
            </ControlPanelWrapper>
        );
    }
}
