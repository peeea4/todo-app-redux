import { NavLink } from "react-router-dom";

import { Navigation } from "./styled";

export const Home = () => {
    return (
        <Navigation>
            <NavLink to="/class">GO TO CLASS PAGE</NavLink>
            <NavLink to="/func">GO TO FC PAGE</NavLink>
        </Navigation>
    );
};
