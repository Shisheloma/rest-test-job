import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToken } from '../../Features/login/login.selectors';
import { getShortLink, getSqueezeError } from '../../Features/squeeze/squeeze.selectors';
import { squeezeThunk } from '../../Features/squeeze/squeeze.thunk';

import './_squeeze.scss';

const Squeeze = () => {
    const [link, setLink] = useState('');
    const dispatch = useDispatch();
    const userToken = useSelector(getToken);
    const shortLink = useSelector(getShortLink);
    const squeezeError = useSelector(getSqueezeError);
    
    const inputHandler = event => {
        const input = event.target.value;
        setLink(input);
    }; 
    
    const squeezeHandler = event => {
        event.preventDefault();
        dispatch(squeezeThunk({link, token: userToken}));
    }; 

    const copyHandler = event => {
        const text = 'http://79.143.31.216/s/' + event.target.innerText.trim();
        navigator.clipboard.writeText(text); 
    };

    return (
        <section className='squeeze'>
            <form className='squeeze_form'>
                <h2 className='squeeze_title'> Link to shorten: </h2> 
                <input 
                    className='squeeze_input' 
                    type="text" 
                    placeholder='Paste link to shorten' 
                    value={link} 
                    onChange={inputHandler}/>
                <button className='squeeze_button' onClick={squeezeHandler}>
                    shorten
                </button> 
            </form>
            {shortLink &&
            <h2 className='squeeze_title'> Shorten link: 
                <span className='squeeze_title_for-copy' onClick={copyHandler}> {shortLink} </span>
            </h2> 
            }
            {squeezeError && 
            <h2 className='squeeze_error'> 
                Error: {squeezeError}
            </h2> 
            }
        </section>
    )
}

export default Squeeze