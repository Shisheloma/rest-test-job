export const getToken = state => state.loginReducer.token;

export const getLoginError = state => state.loginReducer.error;

export const getLoginLoading = state => state.loginReducer.loading;