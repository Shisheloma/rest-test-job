import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Authorization from '../Components/Routes/Authorization/Authorization';
import Shortener  from '../Components/Routes/Shortener/Shortener';
import StorageToken from '../Components/Routes/StorageToken/StorageToken';

export default function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Navigate replace to="/"/>} /> 
                <Route path="/" element={<StorageToken/>} >
                    <Route index element={<Authorization/>} />
                    <Route path="shortener" element={<Shortener/>}/>
                </Route>
            </Routes> 
        </BrowserRouter>
    )
}
 