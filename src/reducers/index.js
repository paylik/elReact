import updateWorksList from "./works-list";
import updateWorksCard from "./works-card";

const reducer = (state, action) => {

    return {
        worksList: updateWorksList(state, action),
        worksCard: updateWorksCard(state, action),
        totalQuantity: 0,
        totalPrice: 0
    };
};

export default reducer;