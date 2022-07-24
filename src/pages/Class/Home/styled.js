import styled from "styled-components";

import { color } from "@/styleConst";

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    a {
        text-decoration: none;
        color: ${color.fontColor};
        &:visited {
            color: ${color.fontColor};
        }
    }
`;
