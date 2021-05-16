import React from "react";
import border from '../../img/slider-border.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import './footer.css'

const Footer = () => {
    return (
        <div>
            <img src={border} alt="Линия"/>
            <div>
                <h5 className="text-center">Разработка сайта: <a href="mailto:paylik@yandex.ru">paylik@yandex.ru</a>
                    <span className="d-block d-md-inline">
                        <FontAwesomeIcon icon={faPhone} className="mx-3" />
                        +375 (29) 11-88-166</span></h5>
            </div>
        </div>
    )
}

export default Footer;