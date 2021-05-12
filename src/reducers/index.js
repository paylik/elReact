import updateWorksList from "./works-list";
import updateWorksCard from "./works-card";

const reducer = (state, action) => {

    return {
        worksList: updateWorksList(state, action),
        worksCard: updateWorksCard(state, action)
    };
};

export default reducer;