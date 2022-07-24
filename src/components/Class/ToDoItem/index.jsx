import { Component } from "react";

import deleteIcon from "@/assets/delete.png";
import {
    ContentWrapper,
    DeleteTaskWrapper,
    StatusWrapper,
    TextWrapper,
    ToDoItemWrapper,
} from "@/components/Class/ToDoItem/styled";

export class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    statusClickHandler() {  
        this.props.toggleTodo(this.props.id);
    }

    deleteTaskClick() {
        this.props.deleteTodo(this.props.id);
    }

    render() {
        const { title, description, isCompleted } = this.props;
        return (
            <ToDoItemWrapper>
                <ContentWrapper className={isCompleted ? "completed" : ""}>
                    <StatusWrapper
                        className="status"
                        onClick={() => this.statusClickHandler()}
                    />
                    <TextWrapper>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </TextWrapper>
                    <DeleteTaskWrapper onClick={() => this.deleteTaskClick()}>
                        <img src={deleteIcon} alt="delete task" />
                    </DeleteTaskWrapper>
                </ContentWrapper>
            </ToDoItemWrapper>
        );
    }
}
