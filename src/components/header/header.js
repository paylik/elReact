import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import {Link} from "react-router-dom";

const Header = ({numItems, total}) => {
    return (
        <header className="header row">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="row">
                        <div className="col-md-3">
                        <Link to="/"><h1 className="logo text-dark">Электрик </h1></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        </div>
                        <div className="collapse navbar-collapse col-md-3" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-link" id="nav-home-tab" data-bs-toggle="tab"
                                      data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                      aria-selected="true">Home</Link>
                                <Link to="/about" className="nav-link" id="nav-about-tab" data-bs-toggle="tab"
                                      data-bs-target="#nav-about" type="button" role="tab" aria-controls="nav-about"
                                      aria-selected="false">Features</Link>
                                <Link to="/card" className="nav-link" id="nav-card-tab" data-bs-toggle="tab"
                                      data-bs-target="#nav-card" type="button" role="tab" aria-controls="nav-card"
                                      aria-selected="false">Калькулятор</Link>
                            </div>


                        </div>
                        <div className="col-md-3 ml-auto">
                            <FontAwesomeIcon icon={faCartArrowDown}/>
                            {numItems} шт. на сумму {total} рублей.
                        </div>
                    </div>
            </nav>


        </header>
    )
};

export default Header;