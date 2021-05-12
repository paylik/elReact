
const updateWorkItems = (cardItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cardItems.slice(0, idx),
            ...cardItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cardItems,
            item
        ];
    }

    return [
        ...cardItems.slice(0, idx),
        item,
        ...cardItems.slice(idx + 1)
    ];
}

const updateWorkItem = (work, item = {}, quantity) => {

    const {
        id = work.id,
        name = work.name,
        price = work.price,
        count = 0
    } = item;

    return {
        id,
        name,
        price,
        count: count + quantity
    }
}

const updateOrder = (state, workId, quantity) => {

    const {worksList: {works}, worksCard: {cardItems, totalCount, totalPrice}} = state;

    const work = works.find(({id}) => id === workId);
    const workIndex = cardItems.findIndex(({id}) => id === workId);
    const item = cardItems[workIndex];

    const newItem = updateWorkItem(work, item, quantity);

    return {
        cardItems: updateWorkItems(cardItems, newItem, workIndex),
        totalCount: totalCount + quantity,
        totalPrice: totalPrice + ( quantity * newItem.price )
    };
}

const updateWorksCard = (state, action) => {

    if (state === undefined) {
        return {
            cardItems: [],
            totalPrice: 0,
            totalCount: 0
        }
    }
    switch (action.type) {

        case 'WORK_ADDED_TO_CARD':
            return updateOrder(state, action.payload, 1);

        case 'WORK_DECREASE_FROM_CARD':
            return updateOrder(state, action.payload, -1);

        case 'WORK_REMOVE_FROM_CARD':
            const item = state.worksCard.cardItems.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -item.count);
        default:
            return state.worksCard
    }
};

export default updateWorksCard;