export const displayAboutReducer = (state = 'all', action) => {
    switch (action.type) {
        case 'SET_TO_SHOW_ABOUT':
            return action.name;
        default:
            return state;
    }
}