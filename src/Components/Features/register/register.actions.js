export const REGISTER_ACTIONS = {
    START: 'user/register_start',
    SUCCESS: 'user/register_success',
    FAIL: 'user/register_fail',  
};

export const registerStart = () => ({ type: REGISTER_ACTIONS.START });

export const registerSuccess = () => ({ type: REGISTER_ACTIONS.SUCCESS }); 

export const registerFail = payload => {
    return {
        type: REGISTER_ACTIONS.FAIL,
        payload
    }
};
 