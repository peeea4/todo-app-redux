import { Component } from "react";

import { ToDoItem } from "@/components/Class/ToDoItem";
import { ToDoListWrapper } from "@/components/Class/ToDoList/styled";

export class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos } = this.props;
        const { toggleTodo, deleteTodo } = this.props;
        return (
            <ToDoListWrapper>
                {todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        {...todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ToDoListWrapper>
        );
    }
}
