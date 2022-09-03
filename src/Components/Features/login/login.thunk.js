import axios from "axios";

import { loginReducer } from "./login.reducer";
import { loginFail, loginStart, loginSuccess } from "./login.actions";
 
export const loginThunk = ({ username , password }) => async dispatch => {
    try {
        dispatch(loginReducer(loginStart()));
        const body = new URLSearchParams();
        body.append('username', username);
        body.append('password', password); 
        const response = await axios({
            method: 'post',
            url:  `http://79.143.31.216/login`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: body
        });         
        // slow down fetching to show spinner for demonstration purposes
        await new Promise(resolve => setTimeout(() => resolve(), 300));
        if (response.status === 200) {
            const token = response.data.access_token;
            localStorage.setItem('userToken', token);
            await dispatch(loginReducer(loginSuccess(token)));
        }
    } catch (error) {
        const message = error.response.data.detail || ''; 
        dispatch(loginReducer(loginFail(message))); 
    }
};