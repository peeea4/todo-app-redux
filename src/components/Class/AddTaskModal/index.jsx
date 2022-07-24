import { Component } from "react";

import {
    AddTaskModalWrapper,
    InputWrapper,
    ModalContentWrapper,
} from "@/components/Class/AddTaskModal/styled";
import { CloseModalButtonContainer } from "@/components/Class/containers/CloseModalBtnContainer";
import { CreateTaskButton } from "@/components/Class/CreateTaskButton";
import { Input } from "@/components/Class/Input";

export class AddTaskModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskTitle: "",
            taskText: "",
        };
    }

    createTaskHandler = (taskTitle, taskText) => {
        this.props.createTask({ taskTitle, taskText });
    };

    changeHandler = (e) => {
        if (e.target.name === "title") {
            this.setState({
                taskTitle: e.target.value,
            });
        } else {
            this.setState({
                taskText: e.target.value,
            });
        }
    };

    render() {
        const { taskTitle, taskText } = this.state;
        return (
            <AddTaskModalWrapper>
                <ModalContentWrapper>
                    <InputWrapper>
                        <span>Title</span>
                        <Input
                            value={taskTitle}
                            changeHandler={this.changeHandler}
                            name="title"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <span>Text</span>
                        <Input
                            value={taskText}
                            changeHandler={this.changeHandler}
                            name="text"
                        />
                    </InputWrapper>
                    <CreateTaskButton
                        clickHandler={() =>
                            this.createTaskHandler(taskTitle, taskText)
                        }
                    />
                </ModalContentWrapper>
                <CloseModalButtonContainer />
            </AddTaskModalWrapper>
        );
    }
}
