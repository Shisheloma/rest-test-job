export const STATISTICS_FILTER_ACTIONS = {
    UPDATE: 'statistics_filter/update', 
    CLEAR: 'statistics_filter/clear', 
};
 
export const statisticsFilterUpdate = payload => {
    return {
        type: STATISTICS_FILTER_ACTIONS.UPDATE,
        payload
    }
};

export const statisticsFilterClear = () => ({ type: STATISTICS_FILTER_ACTIONS.CLEAR });

  