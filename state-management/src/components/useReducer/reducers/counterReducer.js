import {ACTIONS} from "./constants/actions";

export const initialState = {count: 0};

export function countrReducer (state, action){
    switch(action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1};

        case ACTIONS.DECREMENT:
            return {count: state.count - 1};

        default: 
            return state;

    }
}