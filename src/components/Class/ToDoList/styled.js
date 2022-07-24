import styled from "styled-components";

import { color } from "@/styleConst";

export const ToDoListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 14px;
    padding: 20px 30px;
    background-color: ${color.backgroundColorApp};
    overflow: auto;
    margin-bottom: 10px;
`;
