import { connect } from "react-redux";

import { toggleModalStatusAction } from "@/actions/modal";
import { AddTaskButton } from "@/components/Class/AddTaskButton";

const mapStateToProps = (state) => ({
    modal: state.modal.addTaskModal,
});

const mapDispatchToProps = (dispatch) => ({
    toggleModalStatus: () => dispatch(toggleModalStatusAction()),
});

export const AddTaskButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTaskButton);
