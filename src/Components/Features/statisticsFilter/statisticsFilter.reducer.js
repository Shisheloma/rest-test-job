import { STATISTICS_FILTER_ACTIONS } from "./statisticsFilter.actions";

const initialState = {
    id: "",
    short: "",
    target: "",
    counter: "",
};

export const statisticsFilterReducer = (state = initialState, action = "") => {
    const { type, payload } = action;

    switch(type) {
        case STATISTICS_FILTER_ACTIONS.UPDATE:
            return {...state,  ...payload}; 
        case STATISTICS_FILTER_ACTIONS.CLEAR:
            return initialState;
        default:
            return state
    }
};