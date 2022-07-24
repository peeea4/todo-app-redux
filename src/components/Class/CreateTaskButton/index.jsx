import { Component } from "react";

import CreateTaskButtonWrapper from "@/components/Class/CreateTaskButton/styled";

export class CreateTaskButton extends Component {
    render() {
        const {clickHandler} = this.props;
        return (
            <CreateTaskButtonWrapper onClick={clickHandler}>
                Create Task
            </CreateTaskButtonWrapper>
        );
    }
}
