import { configureStore } from '@reduxjs/toolkit';

import { registerReducer } from '../Components/Features/register/register.reducer';
import { loginReducer } from '../Components/Features/login/login.reducer';
import { squeezeReducer } from '../Components/Features/squeeze/squeeze.reducer';
import { statisticsFetchReducer } from '../Components/Features/statisticsFetch/statisticsFetch.reducer';
import { statisticsSortReducer } from '../Components/Features/statisticsSort/statisticsSort.reducer';
import { statisticsFilterReducer } from '../Components/Features/statisticsFilter/statisticsFilter.reducer';

  export const store = configureStore({ 
    reducer: {
      registerReducer,
      loginReducer,
      squeezeReducer,
      statisticsSortReducer,
      statisticsFilterReducer,
      statisticsReducer: statisticsFetchReducer,
    } 
  });