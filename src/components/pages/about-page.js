import React from "react";
import img06 from "../../img/img06.jpg";

const AboutPage = () => {
    return (<div>
        <h2>Наши преимущества:</h2>
        <ul>
            <li>У нас достаточно ресурсов для выполнения срочных заказов и устранения аварийных ситуаций.</li>
            <li> У нас своя наработанная база поставщиков электротоваров.</li>
            <li> Наша компания имеет свидетельства технической компетентности.</li>
            <li>Наша организация имеет аттестат соответствия (лицензию) на выполнение подрядных работ
                третьей категории, аттестат соответствия четвёртой категории (генподрядный).
            </li>
            <li> Мы осуществляем монтаж по ГОСТ, ТУ и ПУЭ.</li>
            <li> Производство работ обеспечивают специалисты с действующей группой допуска, подтверждённой в
                энергонадзоре.
            </li>
            <li>Работы производятся только с использованием профессионального инструмента.</li>
        </ul>
        <h2>Наши сертификаты</h2>
        <img src={img06} alt="Сертификат" className="img-fluid"/>
    </div>)
};

export default AboutPage;