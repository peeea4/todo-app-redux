import { Component } from "react";
import { PersistGate } from "redux-persist/integration/react";

import { AppWrapper } from "@/components/Class/App/styled";
import { ControlPanel } from "@/components/Class/ContolPanel";
import { Header } from "@/components/Class/Header";
import { persistor } from "@/store";

import { AddTaskModalContainer } from "../containers/AddTaskModalContainer";
import { VisibleTodoList } from "../containers/VisibleTodoList";

export class AppClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isOpenModal } = this.props;
        return (
            <PersistGate loading={null} persistor={persistor}>
                <AppWrapper>
                    <Header />
                    <VisibleTodoList />
                    <ControlPanel />
                    {isOpenModal && <AddTaskModalContainer />}
                </AppWrapper>
            </PersistGate>
        );
    }
}
