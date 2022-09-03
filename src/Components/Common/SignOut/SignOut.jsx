import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { loginSuccess } from '../../Features/login/login.actions';
import { loginReducer } from '../../Features/login/login.reducer';
import { getToken } from '../../Features/login/login.selectors';

import './_signOut.scss';

const SignOut = () => { 
    const dispatch = useDispatch();
    const userToken = useSelector(getToken);

    const singOut = () => {
        localStorage.setItem('userToken', '');
        dispatch(loginReducer(loginSuccess(''))); 
    }; 

  return (
    (userToken === '') ?
    (<button className='signout_button' onClick={singOut}>
         <Link className='signout_button_link' to='/'> SignIn </Link>
    </button>)
    :(<button className='signout_button' onClick={singOut}>
        SignOut
    </button>)
  )
}

export default SignOut