import React, { Fragment } from "react";
import './works-list-item.css';

const  WorksListItem = ({ work, onAddedToCard }) => {
    const { name, price, quantity } = work;
    return (
        <Fragment>
            <span>{ name }</span>
            <span>{ price }</span>
            <span>{ quantity }</span>
            <button
                type="button"
                className="btn btn-primary"
                onClick={onAddedToCard}
            >Добавить</button>
        </Fragment>
    )
};

export default WorksListItem;