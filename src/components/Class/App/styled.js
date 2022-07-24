import styled from "styled-components";

import { color } from "@/styleConst";

export const AppWrapper = styled.div`
    width: 400px;
    height: 80%;

    display: grid;

    grid-template-rows: 60px 1fr 100px;

    background-color: ${color.backgroundColorApp};
    color: ${color.fontColor};

    border-radius: 10px;
`;
