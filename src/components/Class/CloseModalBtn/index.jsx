import { Component } from "react";

import closeIcon from "@/assets/close.png";
import CloseModalBtnWrapper from "@/components/Class/CloseModalBtn/styled";

export class CloseModalBtn extends Component {
    closeBtnClickHandler() {
        this.props.toggleModalStatus();
    }

    render() {
        return (
            <CloseModalBtnWrapper onClick={() => this.closeBtnClickHandler()}>
                <img src={closeIcon} alt="close modal" />
            </CloseModalBtnWrapper>
        );
    }
}
