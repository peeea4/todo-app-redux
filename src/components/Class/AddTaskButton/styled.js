import styled from "styled-components";

import { color } from "@/styleConst";

export const AddTaskButtonWrapper = styled.button`
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border: 0px;
    border-radius: 50%;

    font-size: 30px;

    color: ${color.fontColor};
    background-color: ${color.primaryColor};
`;
