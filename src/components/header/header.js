import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faEnvelope, faMapMarkedAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import "./header.css";
import {connect} from "react-redux";

const Header = ({totalCount, totalPrice}) => {
    const items = [
        {icon: faMapMarkedAlt, size: "3x", title: "Мы работаем:", content: "г.Сморгонь + 60 км."},
        {icon: faMobileAlt, size: "3x", title: "Позвоните:", content: "+375 (33) 903 68 62"},
        {icon: faEnvelope, size: "3x", title: "Напишите:", content: "mihalok@yandex.ru"},
    ]
    const elements = items.map((item) => {
        return (
            <div className="info-box text-center float-left col col-12 col-lg-3" key={item.title}>
                <FontAwesomeIcon icon={item.icon} size={item.size} className="float-left mr-1"/>
                <div>{item.title}</div>
                <div>{item.content}</div>
            </div>)
    })
    return (
        <header className="">

            <div className="container">
                <div className="row">
                    <div className="title col-3 ">
                        <NavLink to="/"><h1 className="logo text-dark d-none d-lg-block">Электрик </h1></NavLink>
                    </div>
                    <div className="col-9">
                        <div className="contacts row">
                            {elements}
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-md-8" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto">
                        <NavLink exact to="/" className="nav-item nav-link col" activeClassName="active"
                        >Главная</NavLink>
                        <NavLink exact to="/about" className="nav-link col" activeClassName="active"
                        >О нас</NavLink>
                        <NavLink exact to="/card" className="nav-link col" activeClassName="active"
                        >Калькулятор</NavLink>
                    </div>
                </div>
                <div className="col-md-4 cart">
                    <FontAwesomeIcon icon={faCartArrowDown} size="3x" className="float-left mr-1"/>
                    <p>{totalCount} шт. на сумму {totalPrice} руб.</p>
                </div>
            </nav>
        </header>
    )
};

const mapStateToProps = ({worksCard: {totalPrice, totalCount}}) => {
    return {
        totalCount,
        totalPrice
    }
}

export default connect(mapStateToProps)(Header);