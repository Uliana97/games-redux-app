export const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_LOG":
      return !state;

    default:
      return state;
  }
};
