import * as actionTypes from '../actionTypes';

const initialState = {
  data: [],
  links: {},
  meta: {
    last_page: 1,
  },
  loading: false,
};


const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.GET_TRANSACTIONS_START:
      return {...state, loading: true};
    case actionTypes.GET_TRANSACTIONS_SUCCESS:
      return {...state, ...payload, loading: false};
    case actionTypes.GET_TRANSACTIONS_FINISH:
      return {...state, loading: false};
    default:
      return state;
  }
};

export default reducer;