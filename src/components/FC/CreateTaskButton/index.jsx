import CreateTaskButtonWrapper from "@/components/FC/CreateTaskButton/styled";

export const CreateTaskButton = ({ clickHandler }) => {
    return (
        <CreateTaskButtonWrapper onClick={clickHandler}>
            Create Task
        </CreateTaskButtonWrapper>
    );
};
