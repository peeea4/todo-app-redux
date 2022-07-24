import { connect } from "react-redux";

import { toggleModalStatusAction } from "@/actions/modal";
import { CloseModalBtn } from "@/components/Class/CloseModalBtn";

const mapStateToProps = (state) => ({
    modal: state.modal.addTaskModal,
});

const mapDispatchToProps = (dispatch) => ({
    toggleModalStatus: () => dispatch(toggleModalStatusAction()),
});

export const CloseModalButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CloseModalBtn);
