import React, { Fragment } from "react";
import './works-list-item.css';

const  WorksListItem = ({ work }) => {
    const { title, price, quantity } = work;
    return (
        <Fragment>
            <span>{ title }</span>
            <span>{ price }</span>
            <span>{ quantity }</span>
        </Fragment>
    )
};

export default WorksListItem;