import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { statisticsThunk } from '../../Features/statisticsFetch/statisticsFetch.thunk';
import { getToken } from '../../Features/login/login.selectors';
import { statisticsSortUpdate } from '../../Features/statisticsSort/statisticsSort.actions';
import { statisticsSortReducer } from '../../Features/statisticsSort/statisticsSort.reducer';
import { getStatisticsSort } from '../../Features/statisticsSort/statisticsSort.selectors';
import { statisticsSortList } from '../../Features/statisticsSort/statisticsSort.list';
import { getShortLink } from '../../Features/squeeze/squeeze.selectors';

import './_statisticsSort.scss';

const StatisticsSort = () => {
    const dispatch = useDispatch();
    const userToken = useSelector(getToken);
    const statisticsSort = useSelector(getStatisticsSort);
    const lastShortenLink = useSelector(getShortLink);
 
    const dropDownList = useMemo(() => {
        return ( 
            Object.values(statisticsSortList).sort((optionA, optionB) => (optionA.name.localeCompare(optionB.name))).map((option, index) => (
                <option 
                    value={option.value} 
                    key={option.value}> 
                    {option.name} 
                </option>
            ))
        )
    }, [statisticsSortList]);

    useEffect(() => {
        const defaultSort = Object.values(statisticsSortList)[0].value;
        dispatch(statisticsThunk(defaultSort, userToken, 0, false)); 
        dispatch(statisticsSortReducer(statisticsSortUpdate(defaultSort))); 
    }, [dropDownList, userToken, lastShortenLink]);

 
    const inputHandler = event => {
        console.log(' GetStatistics inputHandler');
        const input = event.target.value;
        dispatch(statisticsThunk(input, userToken, 0, false));
        dispatch(statisticsSortReducer(statisticsSortUpdate(input))); 
    };  

    return (
        <>
            <h2 className='statistics_sort_title'>
                Sort:
            </h2>
            <form className='statistics_sort_form'>
                <select className='statistics_sort_form_input' name="sort" id="sort" value={statisticsSort} onChange={inputHandler}>
                    { dropDownList }
                </select> 
            </form>
        </>
    )
}

export default StatisticsSort