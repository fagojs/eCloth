const INITIAL_STATE = {
  hidden: true,
};

const toggleDropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default toggleDropdownReducer;
