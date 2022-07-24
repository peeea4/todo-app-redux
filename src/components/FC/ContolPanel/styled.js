import styled from "styled-components";

import { color } from "@/styleConst";

const ControlPanelWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    background-color: ${color.secondaryColor};

    padding: 20px;

    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export { ControlPanelWrapper, FlexWrapper };
