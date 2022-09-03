import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { loginSuccess } from '../../Features/login/login.actions';
import { loginReducer } from '../../Features/login/login.reducer';

import { getToken } from '../../Features/login/login.selectors';

const StorageToken = () => {
    const dispatch = useDispatch();
    const userToken = useSelector(getToken);

    useEffect(() => {
        if (userToken === ''){
            const localToken = localStorage.getItem('userToken');
            if (localToken !== '') {
                dispatch(loginReducer(loginSuccess(localToken)));
            }
        }
    }, []);

  return (
    <Outlet/>
  )
};

export default StorageToken