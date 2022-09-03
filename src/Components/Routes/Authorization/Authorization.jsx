import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { loginThunk } from '../../Features/login/login.thunk';
import { registerThunk } from '../../Features/register/register.thunk';
import { getLoginError, getLoginLoading, getToken } from '../../Features/login/login.selectors';
import { getRegisterError, getRegisterLoading } from '../../Features/register/register.selectors';
import Spinner from '../../Common/Spinner/Spinner';

import './_authorization.scss';

const Authorization = () => {
    const [input, setInput] = useState({ username: '', password:'' });
    const [errorToShow, setErrorToShow] = useState();
    const dispatch = useDispatch();
    const userToken = useSelector(getToken);
    const loginLoading = useSelector(getLoginLoading); 
    const loginError = useSelector(getLoginError);
    const registerLoading = useSelector(getRegisterLoading); 
    const registerError = useSelector(getRegisterError);
    
    const navigate = useNavigate();

    const nameHandler = event => {
        const username = event.target.value;
        setInput(prev => ({...prev, username}))
    };

    const passwordHandler = event => {
        const password = event.target.value;
        setInput(prev => ({...prev, password}))
    };
    
    const registerHandler = event => {
        event.preventDefault();
        setErrorToShow('register');
        dispatch(registerThunk(input));
    };
    
    const loginHandler = event => {
        event.preventDefault();
        setErrorToShow('login');
        dispatch(loginThunk(input));
    };
 
    useEffect(() => {
        const tokenCheck = async () => {
            if (userToken !== "") {
                // delay to show "successful" message
                await new Promise(resolve => setTimeout(() => resolve(), 1000));
                navigate('/shortener')
            }
        };
        tokenCheck();
    }, [userToken]);

    return (
        <section className='authorization'>
            <div className='authorization_wrapper'>
                <h3 className='authorization_title'> Please, login or register </h3>
                <form className='authorization_form'>
                    <span className='authorization_form_label'> Name: </span>
                    <input className='authorization_form_input' type="text" placeholder='Name' value={input.name} onChange={nameHandler}/>
                    <br />
                    <span className='authorization_form_label'> Password: </span>
                    <input className='authorization_form_input' type="password" placeholder='Password' value={input.password} onChange={passwordHandler}/>
                    <br /> 
                    {(loginLoading || registerLoading) && <Spinner/> }
                    <span className='authorization_form_success'>{(userToken !== '') && `Successful`}</span>
                    <span className='authorization_form_error'>{(errorToShow === 'register') && registerError && `Error: ${registerError}`}</span>
                    <span className='authorization_form_error'>{(errorToShow === 'login') && loginError && `Error: ${loginError}`}</span>
                    <button className='authorization_form_button' onClick={registerHandler}>
                        register
                    </button>
                    <button className='authorization_form_button' onClick={loginHandler}>
                        login
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Authorization