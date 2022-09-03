import { REGISTER_ACTIONS } from "./register.actions";

const initialState = {
    loading: false, 
    error: ''
};

export const registerReducer = (state = initialState, action = "") => {
    const { type, payload } = action;
    
    switch(type) {
        case REGISTER_ACTIONS.START:
            return {...state, loading: true, error: '' };
        case REGISTER_ACTIONS.SUCCESS:
            return {...state, loading: false, error: '' };
        case REGISTER_ACTIONS.FAIL:
            return {...state, loading: false, error: payload}; 
        default:
            return state
    }
};