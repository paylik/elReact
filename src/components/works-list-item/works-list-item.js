import React from "react";
import './works-list-item.css';

const  WorksListItem = ({ work, onAddedToCard }) => {
    const { name, price, quantity } = work;
    return (
        <div className="d-flex">
            <div>{ name }</div>
            <h4 className="ml-auto text-right">{ price } <span className="d-none d-lg-inline">руб.</span></h4>
            <div>{ quantity }</div>
            <button
                type="button"
                className="btn btn-primary ml-1 mr-n3"
                onClick={onAddedToCard}
            >Добавить</button>
        </div>
    )
};

export default WorksListItem;