import { ACTIONS } from "../constants/actions";

export const initialState = { count: 0, name: "kajol" };

export const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {...state, count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return {...state, count: state.count - 1 };

    case ACTIONS.INCREASEBY5:
      return {...state, count: state.count + action.payload.number };

    case ACTIONS.TOGLENAME: 
      return {...state, name: state.name =="Ali" ? "kajol" : "Ali"}    

    default:
      return state;
  }
};
