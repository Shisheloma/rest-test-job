import axios from "axios";

import { registerReducer } from "./register.reducer";
import { registerFail, registerStart, registerSuccess } from "./register.actions";
import { loginThunk } from "../login/login.thunk";
 
export const registerThunk = ({ username , password }) => async dispatch => {
    try {
        dispatch(registerReducer(registerStart()));
        const response = await axios({
            method: 'post',
            url:  `http://79.143.31.216/register`,
            params: {
                username,
                password
            }
           });
        // slow down fetching to show spinner for demonstration purposes
        await new Promise(resolve => setTimeout(() => resolve(), 300));
        if (response.status === 200) {
            await dispatch(registerReducer(registerSuccess()));
            await dispatch(loginThunk({ username , password }));
        }
    } catch (error) {
        const message = error.response.data.detail || ''; 
        dispatch(registerReducer(registerFail( message))); 
    }
};

