const worksLoaded = (newWork) => {
    return {
        type: 'WORKS_LOADED',
        payload: newWork
    }
};

export {
    worksLoaded
}