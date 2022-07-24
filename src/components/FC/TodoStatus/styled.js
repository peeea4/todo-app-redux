import styled from "styled-components";

import { color } from "@/styleConst";

export const TodoStatusWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;

    color: ${color.fontColor};
    border: 0;
`;

export const ContentWrapper = styled.div`
    width: 150px;
    background-color: ${color.backgroundColor};
    padding: 6px 12px;
    border-radius: 10px;
`;
