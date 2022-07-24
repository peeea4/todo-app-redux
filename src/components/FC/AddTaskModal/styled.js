import styled from "styled-components";

import { color } from "@/styleConst";

const AddTaskModalWrapper = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: ${color.backgroundColorTr};

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 350px;
    height: 400px;

    background-color: ${color.backgroundColorApp};
    border-radius: 10px;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    font-size: 20px;

    margin-top: 16px;

    span {
        color: ${color.backgroundColor};
    }
`;

export { AddTaskModalWrapper, InputWrapper, ModalContentWrapper };
