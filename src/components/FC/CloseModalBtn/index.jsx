import { useDispatch } from "react-redux";

import { toggleModalStatusAction } from "@/actions/modal";
import closeIcon from "@/assets/close.png";
import CloseModalBtnWrapper from "@/components/FC/CloseModalBtn/styled";

export const CloseModalBtn = () => {
    const dispatch = useDispatch();

    const closeBtnClickHandler = () => {
        dispatch(toggleModalStatusAction());
    };

    return (
        <CloseModalBtnWrapper onClick={closeBtnClickHandler}>
            <img src={closeIcon} alt="close modal" />
        </CloseModalBtnWrapper>
    );
};
