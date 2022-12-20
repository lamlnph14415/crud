import React from 'react';
import './Nav.scss';
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">

                <NavLink to="/" activeClassName="active" exact>
                    Home
                </NavLink>
                {/* <NavLink to="/login" activeClassName="active">
                    Login
                </NavLink> */}
                <NavLink to="/about" activeClassName="active">
                    Dang ky
                </NavLink>
                <NavLink to="/login" activeClassName="active">
                    Dang nhap
                </NavLink>

                <NavLink to="/apiuser" activeClassName="active">
                    Api User
                </NavLink>
            </div>
        )
    }
}
export default Nav;