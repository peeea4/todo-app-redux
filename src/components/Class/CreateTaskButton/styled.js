import styled from "styled-components";

import { color } from "@/styleConst";

const CreateTaskButtonWrapper = styled.button`
    color: ${color.fontColor};
    background-color: ${color.primaryColor};

    border: 0;
    border-radius: 10px;

    margin-top: 20px;

    font-size: 26px;

    padding: 8px 24px;

    cursor: pointer;

    transition: all 0.15s linear;

    &:hover {
        transform: scale(1.025);
    }
`;

export default CreateTaskButtonWrapper;
