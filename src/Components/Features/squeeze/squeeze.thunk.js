import axios from "axios";

import { squeezeReducer } from "./squeeze.reducer";
import { squeezeFail, squeezeStart, squeezeSuccess, SQUEEZE_ACTIONS } from "./squeeze.actions";
 
export const squeezeThunk = ({ link, token }) => async dispatch => {
    try {
        dispatch(squeezeReducer(squeezeStart()));  
        const response = await axios({
            method: 'post',
            url:  `http://79.143.31.216/squeeze`,
            params: {
                link
            },
            headers: { 
                "Authorization": `Bearer ${token}`,  
            },
        });
 
        if (response.status === 200) {
            const link = response.data.short;
            await dispatch(squeezeReducer(squeezeSuccess(link)));
        }
    } catch (error) {
        const message = error.response.data.detail[0].msg || 'Sorry, error occured. Please, check if used link is valid'; 
        dispatch(squeezeReducer(squeezeFail(message))); 
    }
}; 