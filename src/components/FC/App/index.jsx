import { useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { AddTaskModal } from "@/components/FC/AddTaskModal";
import { AppWrapper } from "@/components/FC/App/styled";
import { ControlPanel } from "@/components/FC/ContolPanel";
import { Header } from "@/components/FC/Header";
import { ToDoList } from "@/components/FC/ToDoList";
import { persistor } from "@/store";

export const App = () => {
    const addTaskModal = useSelector((state) => state.modal.addTaskModal);

    return (
        <PersistGate loading={null} persistor={persistor}>
            <AppWrapper>
                <Header />
                <ToDoList />
                <ControlPanel />
                {addTaskModal && <AddTaskModal />}
            </AppWrapper>
        </PersistGate>
    );
};
