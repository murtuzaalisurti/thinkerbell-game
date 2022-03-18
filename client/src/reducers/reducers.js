export const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        default:
            return state;
    }
}