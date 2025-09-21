import { ACTIONS } from "../constants/actions";

export const initialState = { count: 0 };

export const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    case ACTIONS.INCREASEBY5:
      return { count: state.count + action.payload.number };

    default:
      return state;
  }
};
