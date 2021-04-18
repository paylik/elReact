import React from "react";
import WorksList from "../works-list";
import SelectedWorksTable from "../selected-works-table";

const CardPage = () => {
    return (
        <div>
        <WorksList />
        <SelectedWorksTable/>
        </div>
    )
};

export default CardPage;