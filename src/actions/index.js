const worksRequested = () => {
    return {
        type: 'FETCH_WORKS_REQUEST'
    }
};

const worksLoaded = (newWork) => {
    return {
        type: 'FETCH_WORKS_SUCCESS',
        payload: newWork
    }
};

const worksError = (error) => {
    return {
        type: 'FETCH_WORKS_FAILURE',
        payload: error
    }
};

const workAddedToCard = (workId) => {
    return {
        type: 'WORK_ADDED_TO_CARD',
        payload: workId
    }
};

const workDecreaseFromCard = (workId) => {
    return {
        type: 'WORK_DECREASE_FROM_CARD',
        payload: workId
    }
};

const workRemoveFromCard = (workId) => {
    return {
        type: 'WORK_REMOVE_FROM_CARD',
        payload: workId
    }
};

const fetchWorks = (electricianWorksService, dispatch) => () => {
    dispatch(worksRequested());
    electricianWorksService.getWorks()
        .then((data) => dispatch(worksLoaded(data)))
        .catch((err) => dispatch(worksError(err)));
};

export {
    fetchWorks,
    workAddedToCard,
    workDecreaseFromCard,
    workRemoveFromCard
};