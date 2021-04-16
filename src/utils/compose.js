const  compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrapeed, f) => f(wrapeed), comp
    )
};

export default compose;