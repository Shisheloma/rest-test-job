export const STATISTICS_FETCH_ACTIONS = {
    START: 'statistics/start',
    SUCCESS_ZERO_PAGE: 'squeeze/successZeroPage',
    SUCCESS_NEXT_PAGE: 'squeeze/successNextPage',
    FAIL: 'statistics/fail',  
};

export const statisticsFetchStart = () => ({ type:STATISTICS_FETCH_ACTIONS.START });

export const statisticsFetchSuccessZero = payload => {
    return {
        type: STATISTICS_FETCH_ACTIONS.SUCCESS_ZERO_PAGE,
        payload
    }
};

export const statisticsFetchSuccessNext = payload => {
    return {
        type: STATISTICS_FETCH_ACTIONS.SUCCESS_NEXT_PAGE,
        payload
    }
};

export const statisticsFetchFail = payload => {
    return {
        type: STATISTICS_FETCH_ACTIONS.FAIL,
        payload
    }
}; 