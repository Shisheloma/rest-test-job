export const SQUEEZE_ACTIONS = {
    START: 'squeeze/start',    
    SUCCESS: 'statistics/success',
    FAIL: 'squeeze/fail',  
};

export const squeezeStart = () => ({ type:SQUEEZE_ACTIONS.START });

export const squeezeSuccess = payload => { 
    return {
        type: SQUEEZE_ACTIONS.SUCCESS,
        payload
    }
}; 

export const squeezeFail = payload => {
    return {
        type: SQUEEZE_ACTIONS.FAIL,
        payload
    }
}; 