import React, { useCallback, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import Spinner from '../Spinner/Spinner';
import { getToken } from '../../Features/login/login.selectors';
import { getStatistics, getStatisticsError, getStatisticsLoading } from '../../Features/statisticsFetch/statisticsFetch.selectors';
import { statisticsThunk } from '../../Features/statisticsFetch/statisticsFetch.thunk';
import { getStatisticsSort  } from '../../Features/statisticsSort/statisticsSort.selectors';
import { getStatisticsFilter } from '../../Features/statisticsFilter/statisticsFilter.selectors';

import './_statisticsList.scss';

const StatisticsList = () => {
    const dispatch = useDispatch();
    const observer = useRef(); 
    const loading = useSelector(getStatisticsLoading); 
    const userToken = useSelector(getToken);
    const statisticsList = useSelector(getStatistics); 
    const statisticsSort = useSelector(getStatisticsSort); 
    const statisticsFilter = useSelector(getStatisticsFilter);
    const statisticsFetchError = useSelector(getStatisticsError);

    // scroll pagination Intersection observer
    const lastNode = useCallback(lastNode => {
        if (loading) return
        if (observer.current) observer.current.disconnect(); 
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                dispatch(statisticsThunk(statisticsSort, userToken, statisticsList.length)); 
            }
        });
        if (lastNode) observer.current.observe(lastNode);
    }, [loading]); 

    // filter statistics array
    const statisticsFiltered = useMemo(() => { 
        const filtered = statisticsList.filter(item => {
            const entriesArr = Object.entries(item);
            const isMatchFilter = entriesArr.reduce((acc, entry) => {
                const propertyValue = ('' + entry[1]).toLowerCase();
                const propertyFilterValue = statisticsFilter[entry[0]].toLowerCase();
                acc = acc && (propertyValue.includes(propertyFilterValue));
                return acc
            }, true);
            return isMatchFilter
        });
        return filtered
    }, [statisticsList, statisticsFilter]);

    // map filtered statistics array to JSX
    const statisticsJSX = useMemo(() => {  
        return ( 
            statisticsFiltered.map((item, index) => {
                const columns = (
                    <>
                        <span className='statistics_list_column statistics_list_column_number'> 
                            {index + 1} 
                        </span>
                        <span className='statistics_list_column statistics_list_column_id'> 
                            {item.id} 
                        </span>
                        <span className='statistics_list_column statistics_list_column_short' data-for-copy> 
                            {item.short} 
                        </span>
                        <span className='statistics_list_column statistics_list_column_counter'> 
                            {item.counter} 
                        </span> 
                        <span className='statistics_list_column statistics_list_column_target'> 
                            {item.target} 
                        </span>
                    </>
                ); 
                // add observer ref to last node 
                if (index === statisticsList.length - 1) {
                    return (<li className='statistics_list_row' key={item.id} ref={lastNode}> {columns} </li>)
                }
                return (<li className='statistics_list_row' key={item.id}> {columns} </li>)
            })
        )
    }, [statisticsList, statisticsFiltered]);  

    const clickHandler = event => {
        if (event.target.hasAttribute('data-for-copy')) {
            const text = 'http://79.143.31.216/s/' + event.target.innerText.trim()
            navigator.clipboard.writeText(text); 
        } 
    };

    return ( 
        <ul className='statistics_list' onClick={clickHandler}>  
            <li className='statistics_list_row'> 
                <span className='statistics_list_column statistics_list_column_number'> № </span>
                <span className='statistics_list_column statistics_list_column_id'> id </span>
                <span className='statistics_list_column statistics_list_column_short'> short </span>
                <span className='statistics_list_column statistics_list_column_counter'> counter </span> 
                <span className='statistics_list_column statistics_list_column_target'> target </span>
            </li> 
            { statisticsJSX } 
            {loading && <Spinner/> }
            <br />
            <span className='statistics_list_error'>{!!statisticsFetchError && statisticsFetchError}</span> 
        </ul>
    ) 
}

export default StatisticsList