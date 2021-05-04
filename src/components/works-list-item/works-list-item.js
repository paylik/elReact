import React from "react";
import './works-list-item.css';

const  WorksListItem = ({ work, onAddedToCard }) => {
    const { name, price, quantity } = work;
    return (
        <div className="d-flex">
            <span>{ name }</span>
            <span>{ price }</span>
            <span>{ quantity }</span>
            <button
                type="button"
                className="btn btn-primary ml-auto"
                onClick={onAddedToCard}
            >Добавить</button>
        </div>
    )
};

export default WorksListItem;