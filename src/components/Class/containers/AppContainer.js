import { connect } from "react-redux";

import { AppClass } from "@/components/Class/App";

const mapStateToProps = (state) => ({
    isOpenModal: state.modal.addTaskModal,
});

export const AppContainer = connect(mapStateToProps)(AppClass);
