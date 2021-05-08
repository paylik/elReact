import React from "react";
import './works-list-item.css';

const  WorksListItem = ({ work, onAddedToCard }) => {
    const { name, price, quantity } = work;
    return (
        <div className="d-flex">
            <div>{ name }</div>
            <h3 className="ml-auto">{ price } руб.</h3>
            <div>{ quantity }</div>
            <button
                type="button"
                className="btn btn-primary ml-1"
                onClick={onAddedToCard}
            >Добавить</button>
        </div>
    )
};

export default WorksListItem;