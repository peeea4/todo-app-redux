import { Component } from "react";

import InputWrapper from "@/components/Class/Input/styled";

export class Input extends Component {
    render() {
        const { value, changeHandler, name } = this.props;
        return (
            <InputWrapper
                value={value}
                onChange={(e) => changeHandler(e)}
                name={name}
            />
        );
    }
}
