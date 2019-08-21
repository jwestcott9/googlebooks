import React from 'react';
import './header.css';
import {Jumbotron} from "reactstrap";

function Header(props) {
    return (
        <Jumbotron className="title-host">{props.children}</Jumbotron>
    );
}

export default Header;