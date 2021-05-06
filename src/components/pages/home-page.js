import React from "react";
import electrical from "../../img/electrical.jpg"

const HomePage = () => {
    return (
        <div>
            <img src={electrical} alt="Электрик" className="img-fluid" />
            <div>Зачем вызывать Электрика?</div>
        </div>
    );
};

export default HomePage;