import { connect } from "react-redux";

import { setFilterAction } from "@/actions/filter";
import { Filter } from "@/components/Class/Filter";

const mapStateToProps = (state) => ({
    modal: state.modal.addTaskModal,
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: (ownProps) => {
        dispatch(setFilterAction(ownProps));
    },
});

export const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filter);
