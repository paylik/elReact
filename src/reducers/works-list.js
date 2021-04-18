const updateWorksList = (state, action) => {

    if (state === undefined) {
        return {
            works: [],
            loading: true,
            error: null
        }
    }
    switch (action.type) {

        case 'FETCH_WORKS_SUCCESS':
            return {
                works: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_WORKS_REQUEST':
            return {
                works: [],
                loading: true,
                error: null
            };
        case 'FETCH_WORKS_FAILURE':
            return {
                works: [],
                loading: false,
                error: action.payload
            };
        default:
            return state.worksList
    }
};

export default updateWorksList;