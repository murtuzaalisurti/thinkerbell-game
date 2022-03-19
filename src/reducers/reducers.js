export const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
            num: state.num + action.payload
        };
      case "subtract":
          return {
              num: state.num - action.payload
          };
      default:
        return state;
    }
};