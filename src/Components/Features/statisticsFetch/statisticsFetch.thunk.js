import axios from "axios";

import { statisticsFetchReducer } from "./statisticsFetch.reducer";
import { statisticsFetchFail, statisticsFetchStart, statisticsFetchSuccessNext, statisticsFetchSuccessZero, STATISTICS_FETCH_ACTIONS } from "./statisticsFetch.actions"; 

export const statisticsThunk = (order, token, offset = 0, nextPage = true, limit = 40) => async dispatch => {
    try {
        dispatch(statisticsFetchReducer(statisticsFetchStart(STATISTICS_FETCH_ACTIONS.START)));   
        const response = await axios({
            method: 'get',
            url:  `http://79.143.31.216/statistics`, 
            params: {
                order,
                offset,
                limit
            }, 
            headers: { 
                "Authorization": `Bearer ${token}`,  
            },
        });  
        // slow down fetching to show spinner for demonstration purposes 
        await new Promise(resolve => setTimeout(() => resolve(), 500));
        if (response.status === 200) {
            console.log(response);
            const list = response.data;
            if (list.length === 0) {
                const message = 'Sorry, server returned an empty list. Probably last record has been reached.'; 
                dispatch(statisticsFetchReducer(statisticsFetchFail(message))); 
                return
            }
            nextPage ?
            await dispatch(statisticsFetchReducer(statisticsFetchSuccessNext(list)))
            :await dispatch(statisticsFetchReducer(statisticsFetchSuccessZero(list)));
        }
    } catch (error) {
        const message = error.response.data.detail || ''; 
        dispatch(statisticsFetchReducer(statisticsFetchFail(message))); 
    }
}; 

	

 