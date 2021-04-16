
const initialState = {
    works: []
};

const reducer = ( state = initialState, action ) => {

    switch (action.type) {

        case 'WORKS_LOADED':
            return {
                works: action.payload
            };
        default: return state;
    }
};

export default reducer;