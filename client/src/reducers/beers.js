const beers = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_BEER':
            return [...state, action.beer];
        default:
            return state;
    }
}

export default beers;
