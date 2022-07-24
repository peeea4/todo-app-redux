import { Component } from "react";

import {
    ContentWrapper,
    TodoStatusWrapper,
} from "@/components/Class/TodoStatus/styled";

export class TodoStatus extends Component {
    render() {
        const { todos } = this.props;
        return (
            <TodoStatusWrapper>
                <ContentWrapper>Total: {todos.length}</ContentWrapper>
            </TodoStatusWrapper>
        );
    }
}
