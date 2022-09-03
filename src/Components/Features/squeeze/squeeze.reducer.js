import { SQUEEZE_ACTIONS } from "./squeeze.actions"; 
 
const initialState = {};

export const squeezeReducer = (state = initialState, action = "") => {
    const { type, payload } = action;

    switch(type) {
        case SQUEEZE_ACTIONS.START:
            return {...state,  loading: true, error: '' };
        case SQUEEZE_ACTIONS.SUCCESS:
            return {...state,  loading: false, error: '', shortLink: payload };
        case SQUEEZE_ACTIONS.FAIL:
            return {...state,  loading: false, error: payload};
         
        default:
            return state
    }
};