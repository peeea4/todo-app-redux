import styled from "styled-components";

import { color } from "@/styleConst";

export const ToDoItemWrapper = styled.div`
    width: 100%;
    cursor: pointer;
    .completed {
        h3 {
            text-decoration: line-through;
        }
        p {
            text-decoration: line-through;
        }
        .status {
            background-color: ${color.secondaryColor};
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 10px 14px;

    border-radius: 10px;

    width: 100%;

    background-color: ${color.backgroundColorItem};
`;

export const StatusWrapper = styled.div`
    width: 25px;
    height: 25px;

    border-radius: 50%;
    border: 1px solid ${color.secondaryColor};

    background-color: transparent;

    margin-right: 16px;
`;

export const TextWrapper = styled.div`
    background-color: ${color.backgroundColorItem};
    font-size: 16px;
`;

export const DeleteTaskWrapper = styled.button`
    border: 0;

    margin-left: auto;

    cursor: pointer;
    background-color: ${color.backgroundColorItem};
`;
