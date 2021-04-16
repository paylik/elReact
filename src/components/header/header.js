import React from "react";
import "./header.css";

const Header = ({ numItems, total }) => {
    return (
        <header className="header row">
            <a className="logo text-dark" href="#">"Электрик </a>
            <a>
                < i className="card-icon fa fa-shopping-card" />
                 { numItems } шт. на сумму { total }
            </a>
        </header>
    )
};

export default Header;