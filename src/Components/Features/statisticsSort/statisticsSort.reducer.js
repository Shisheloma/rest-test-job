import { STATISTICS_SORT_ACTIONS } from "./statisticsSort.actions";

const initialState = {
    loading: false, 
    error: '', 
    statistics: []
};

export const statisticsSortReducer = (state = initialState, action = "") => {
    const { type, payload } = action;

    switch(type) {
        case STATISTICS_SORT_ACTIONS.UPDATE:
            return {...state,  statisticsSort: payload}; 
        default:
            return state
    }
};