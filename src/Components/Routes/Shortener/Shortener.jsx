import React from 'react';

import SignOut from '../../Common/SignOut/SignOut';
import Squeeze from '../../Common/Squeeze/Squeeze';
import StatisticsFilter from '../../Common/StatisticsFilter/StatisticsFilter';
import StatisticsList from '../../Common/StatisticsList/StatisticsList';
import StatisticsSort from '../../Common/StatisticsSort/StatisticsSort';

import './_shortener.scss';

const Shortener = () => { 

    return (
        <>
            <SignOut/>
            <Squeeze/>
            <h2 className='statistics_title'> Usage statistics: </h2>
            <StatisticsSort/>
            <StatisticsFilter/>
            <StatisticsList/>
        </>
    )
}

export default Shortener