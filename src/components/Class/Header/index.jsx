import { Component } from "react";

import { HeaderTitle, HeaderWrapper } from "@/components/Class/Header/styled";

export class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderTitle>To Do List</HeaderTitle>
            </HeaderWrapper>
        );
    }
}
