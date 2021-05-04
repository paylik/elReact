import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faEnvelope, faMapMarkedAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import {Link} from "react-router-dom";

const Header = ({numItems, total}) => {
    const items = [
        {icon: faMapMarkedAlt, size: "3x", title: "Мы работаем:", content: "г.Сморгонь + 60 км."},
        {icon: faMobileAlt, size: "3x", title: "Позвоните:", content: "+375 (29) 11 88 166"},
        {icon: faEnvelope, size: "3x", title: "Напишите:", content: "paylik@yandex.ru"},
    ]
    const elements = items.map((item) => {
        return (
            <div className="info-box text-center float-left">
                <FontAwesomeIcon icon={item.icon} size={item.size} className="float-left mr-1"/>
                <div>{item.title}</div>
                <div>{item.content}</div>
            </div>)
    })
    return (
        <header className="header">

            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="row">
                    <div className="title col-3 "><Link to="/"><h1 className="logo text-dark">Электрик </h1></Link>
                    </div>
                    <div className="contacts col-9">
                        {elements}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link" id="nav-home-tab" data-bs-toggle="tab"
                                  data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                  aria-selected="true">Главная</Link>
                            <Link to="/about" className="nav-link" id="nav-about-tab" data-bs-toggle="tab"
                                  data-bs-target="#nav-about" type="button" role="tab" aria-controls="nav-about"
                                  aria-selected="false">О нас</Link>
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