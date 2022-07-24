import { AddTaskButton } from "@/components/FC/AddTaskButton";
import {
    ControlPanelWrapper,
    FlexWrapper,
} from "@/components/FC/ContolPanel/styled";
import { Filter } from "@/components/FC/Filter";
import { TodoStatus } from "@/components/FC/TodoStatus";

export const ControlPanel = () => {
    return (
        <ControlPanelWrapper>
            <AddTaskButton />
            <FlexWrapper>
                <Filter />
                <TodoStatus />
            </FlexWrapper>
        </ControlPanelWrapper>
    );
};
