import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown, faEnvelope, faMapMarkedAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import "./header.css";
import {connect} from "react-redux";

const Header = ({totalQuantity, totalPrice}) => {
    const items = [
        {icon: faMapMarkedAlt, size: "3x", title: "Мы работаем:", content: "г.Сморгонь + 60 км."},
        {icon: faMobileAlt, size: "3x", title: "Позвоните:", content: "+375 (33) 903 68 62"},
        {icon: faEnvelope, size: "3x", title: "Напишите:", content: "paylik@yandex.ru"},
    ]
    const elements = items.map((item) => {
        return (
            <div className="info-box text-center float-left col" key={item.title}>
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
                        <NavLink  to="/"><h1 className="logo text-dark">Электрик </h1></NavLink>
                    </div>
                    <div className="col-9">
                        <div className="contacts row">
                            {elements}
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="row row100">
                        <div className="collapse navbar-collapse col-md-8" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink exact  to="/" className="nav-link col" activeClassName = "active"
                                      >Главная</NavLink>
                                <NavLink exact  to="/about" className="nav-link col" activeClassName = "active"
                                      >О нас</NavLink>
                                <NavLink exact  to="/card" className="nav-link col" activeClassName = "active"
                                      >Калькулятор</NavLink>
                            </div>
                        </div>
                        <div className="col-md-4 cart">
                            <FontAwesomeIcon icon={faCartArrowDown} size="3x" className="float-left mr-1"/>
                            <p>{totalQuantity} шт. на сумму {totalPrice} руб.</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(Header);