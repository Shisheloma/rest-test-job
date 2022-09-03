import { LOGIN_ACTIONS } from "./login.actions";

const initialState = {
    loading: false, 
    error: '',
    token: ''
};

export const loginReducer = (state = initialState, action = "") => {
    const { type, payload } = action;
    
    switch(type) {
        case LOGIN_ACTIONS.START:
            return {...state, loading: true, error: '' };
        case LOGIN_ACTIONS.SUCCESS:
            return {...state, loading: false, error: '', token: payload };
        case LOGIN_ACTIONS.FAIL:
            return {...state, loading: false, error: payload};
        default:
            return state
    }
};