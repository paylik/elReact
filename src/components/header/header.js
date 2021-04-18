import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown }  from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import {Link} from "react-router-dom";

const Header = ({ numItems, total }) => {
    return (
        <header className="header row">
            <Link  to="/"><h1 className="logo text-dark">Электрик </h1></Link>
            <div>
                <FontAwesomeIcon icon={faCartArrowDown} />
                 { numItems } шт. на сумму { total } рублей.
            </div>
        </header>
    )
};

export default Header;