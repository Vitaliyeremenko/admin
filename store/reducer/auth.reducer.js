import * as actionTypes from '../actionTypes';

const intialState = {
  access_token: null,
  permissions: null,
  user: null,
  loading: false,
};

const reducer = (state = intialState, {type, payload}) => {
  switch (type) {
    case actionTypes.LOGIN_START:
      return {...state, loading: true};
    case actionTypes.LOGIN_SUCCESS:
      return {...state, ...payload, loading: false};
    case actionTypes.LOGIN_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default reducer;