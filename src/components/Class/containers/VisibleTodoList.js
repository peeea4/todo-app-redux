import { connect } from "react-redux";

import { deleteTodoAction, toggleTodoAction } from "@/actions/todos";
import { ToDoList } from "@/components/Class/ToDoList";
import { ACTIVE_TODOS, ALL_TODOS, COMPLETED_TODOS } from "@/constants";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case ALL_TODOS:
            return todos;
        case COMPLETED_TODOS:
            return todos.filter((todo) => todo.isCompleted);
        case ACTIVE_TODOS:
            return todos.filter((todo) => !todo.isCompleted);
        default:
            break;
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.filter),
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (ownProps) => dispatch(toggleTodoAction(ownProps)),
    deleteTodo: (ownProps) => dispatch(deleteTodoAction(ownProps)),
});

export const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToDoList);
