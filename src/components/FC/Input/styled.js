import styled from "styled-components";

import { color } from "@/styleConst";

const InputWrapper = styled.input`
    border: 0px;

    font-size: 20px;

    padding: 6px 12px;

    border-radius: 10px;
    border: 2px solid ${color.backgroundColor};

    color: ${color.backgroundColor};
    background-color: ${color.backgroundColorApp};
    &:focus {
        border: 2px solid ${color.backgroundColor};
        outline: 0px;
    }
`;

export default InputWrapper;
