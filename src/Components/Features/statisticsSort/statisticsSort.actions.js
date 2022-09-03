export const STATISTICS_SORT_ACTIONS = {
    UPDATE: 'statistics_sort/update', 
};
 
export const statisticsSortUpdate = payload => {
    return {
        type: STATISTICS_SORT_ACTIONS.UPDATE,
        payload
    }
};
  