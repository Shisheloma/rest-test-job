import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getStatisticsFilter } from '../../Features/statisticsFilter/statisticsFilter.selectors';
import { statisticsSortReducer } from '../../Features/statisticsSort/statisticsSort.reducer';
import { statisticsFilterClear, statisticsFilterUpdate } from '../../Features/statisticsFilter/statisticsFilter.actions';

import './_statisticsFilter.scss';

const StatisticsFilter = () => {  
    const dispatch = useDispatch();
    const statisticsFilter = useSelector(getStatisticsFilter);

    const inputHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(statisticsSortReducer(statisticsFilterUpdate({[name]: value}))); 
    };

    const clearFilters = () => {
        dispatch(statisticsSortReducer(statisticsFilterClear())); 
    };

    return (
    <section className='statistics_filter'>
        <h2 className='statistics_filter_title'>
            Filters:
        </h2>
        <ul className='statistics_filter_list'>
            <li className='statistics_filter_list_item'>
                <span className='statistics_filter_list_label'> ID: </span>
                <input 
                    className='statistics_filter_list_input' 
                    type="text" 
                    name="id" 
                    placeholder='id' 
                    value={statisticsFilter.id} 
                    onChange={inputHandler}/>  
            </li>
            <li className='statistics_filter_list_item'>
                <span className='statistics_filter_list_label'> Shorten link: </span>
                <input 
                    className='statistics_filter_list_input' 
                    type="text" 
                    name="short" 
                    placeholder='short' 
                    value={statisticsFilter.short} 
                    onChange={inputHandler}/>  
            </li>
            <li className='statistics_filter_list_item'>
                <span className='statistics_filter_list_label'> Visits count: </span>
                <input 
                    className='statistics_filter_list_input' 
                    type="text" 
                    name="counter" 
                    placeholder='counter' 
                    value={statisticsFilter.counter} 
                    onChange={inputHandler}/>   
            </li>
            <li className='statistics_filter_list_item'>
                <span className='statistics_filter_list_label'> Full link: </span>
                <input 
                    className='statistics_filter_list_input' 
                    type="text" 
                    name="target" 
                    placeholder='target' 
                    value={statisticsFilter.target} 
                    onChange={inputHandler}/>  
            </li>
        </ul>
        <button className='statistics_filter_button' onClick={clearFilters}> Clear filters </button>
    </section>
  )
}

export default StatisticsFilter