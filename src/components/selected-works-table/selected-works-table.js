import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {workAddedToCard, workDecreaseFromCard, workRemoveFromCard} from "../../actions";
import './selected-works-table.css'
import {connect} from "react-redux";

const SelectedWorksTable = ({items, totalPrice, totalCount, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) => {
        const {id, name, count, price} = item;
        return (
            <tr key={id}>
                <th scope="row">{idx + 1}</th>
                <td>{name}</td>
                <td>{price}</td>
                <td>{count}</td>
                <td>{price * count}</td>
                <td>
                    <button
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onDelete(id)}
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                    <button
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={() => onIncrease(id)}
                    >
                        <FontAwesomeIcon icon={faPlusCircle}/>
                    </button>
                    <button
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={() => onDecrease(id)}
                    >
                        <FontAwesomeIcon icon={faMinusCircle}/>
                    </button>

                </td>
            </tr>

        );
    }

    return (
        <Fragment>
            <h2>Ваш заказ в количестве { totalCount } шт. на сумму { totalPrice } </h2>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                {items.map(renderRow)}
                </tbody>
            </table>
        </Fragment>
    )
}

const mapStateToProps = ({ worksCard: {cardItems, totalPrice, totalCount}}) => {
    return {
        items: cardItems,
        totalPrice,
        totalCount
    }
}

const mapDispatchToProps = {
    onIncrease: workAddedToCard,
    onDecrease: workDecreaseFromCard,
    onDelete: workRemoveFromCard
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedWorksTable);