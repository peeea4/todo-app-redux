import { connect } from "react-redux";

import { toggleModalStatusAction } from "@/actions/modal";
import { addTodoAction } from "@/actions/todos";
import { AddTaskModal } from "@/components/Class/AddTaskModal";

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    createTask: (ownProps) => {
        dispatch(addTodoAction(ownProps.taskTitle, ownProps.taskText));
        dispatch(toggleModalStatusAction());
    },
});

export const AddTaskModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTaskModal);
