import { Component } from "react";
import { NavLink } from "react-router-dom";

import { Navigation } from "./styled";

export class Home extends Component {
    render() {
        return (
            <Navigation>
                <NavLink to="/class">GO TO CLASS PAGE</NavLink>
                <NavLink to="/func">GO TO FC PAGE</NavLink>
            </Navigation>
        );
    }
}
