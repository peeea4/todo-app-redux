import styled from "styled-components";

const CloseModalBtnWrapper = styled.button`
    border: 0px;

    background-color: transparent;

    position: absolute;
    top: calc(50% - 200px - 24px - 10px);
    right: calc(50% - 175px - 24px - 10px);

    cursor: pointer;

    img {
        background-color: transparent;
    }
`;

export default CloseModalBtnWrapper;
