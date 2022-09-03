export const LOGIN_ACTIONS = { 
    START: 'user/login_start',
    SUCCESS: 'user/login_success',
    FAIL: 'user/login_fail',
};

export const loginStart = () => ({ type:LOGIN_ACTIONS.START });

export const loginSuccess = payload => {
    return {
        type:LOGIN_ACTIONS.SUCCESS,
        payload
    }
};

export const loginFail = payload => {
    return {
        type:LOGIN_ACTIONS.FAIL, 
        payload
    }
};