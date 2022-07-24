import styled from "styled-components";

import { color } from "@/styleConst";

const FilterWrapper = styled.div`
    width: 50%;

    display: flex;
    justify-content: flex-start;

    select,
    option {
        width: 150px;
        padding: 6px 12px;
        color: ${color.fontColor};
        background-color: ${color.backgroundColor};
        border: 0;
        border-radius: 10px;
    }
`;

export default FilterWrapper;
