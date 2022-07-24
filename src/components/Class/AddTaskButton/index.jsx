import { Component } from "react";

import { AddTaskButtonWrapper } from "@/components/Class/AddTaskButton/styled";

export class AddTaskButton extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler() {
        this.props.toggleModalStatus();
    }

    render() {
        return (
            <AddTaskButtonWrapper onClick={() => this.clickHandler()}>
                <span>+</span>
            </AddTaskButtonWrapper>
        );
    }
}
