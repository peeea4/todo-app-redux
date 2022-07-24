import { connect } from "react-redux";

import { TodoStatus } from "@/components/Class/TodoStatus";

const mapStateToProps = (state) => ({
    todos: state.todos,
});

export const TodoStatusContainer = connect(mapStateToProps)(TodoStatus);
