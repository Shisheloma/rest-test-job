import { STATISTICS_FETCH_ACTIONS } from "./statisticsFetch.actions";

const initialState = {
    loading: false, 
    error: '', 
    statistics: []
};

export const statisticsFetchReducer = (state = initialState, action = "") => {
    const { type, payload } = action;

    switch(type) {
        case STATISTICS_FETCH_ACTIONS.START:
            return {...state,  loading: true, error: ''};
        case STATISTICS_FETCH_ACTIONS.SUCCESS_ZERO_PAGE:
            return {...state,  loading: false, error: '', statistics: payload};
            case STATISTICS_FETCH_ACTIONS.SUCCESS_NEXT_PAGE:
                return {...state,  loading: false, error: '', statistics: [...state.statistics, ...payload]}
        case STATISTICS_FETCH_ACTIONS.FAIL:
            return {...state,  loading: false, error: payload};
         
        default:
            return state
    }
};