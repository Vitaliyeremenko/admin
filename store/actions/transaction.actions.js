import * as actionTypes from '../actionTypes';
import axios            from '../../axios.instance';
import {getAuthHeaders} from '../../utils/Helpers';

const getTransactionsStart = () => ({type: actionTypes.GET_TRANSACTIONS_START});
const getTransactionsSuccess = (payload) => ({type: actionTypes.GET_TRANSACTIONS_SUCCESS, payload});
const getTransactionsFail = (fail) => ({type: actionTypes.GET_TRANSACTIONS_FINISH, fail});

export const getTransactions = (type, status, page = 1) => dispatch => {
  dispatch(getTransactionsStart());
  console.log(getAuthHeaders());
  axios.get(`/admin/transactions/get/${type}`, {
      headers: getAuthHeaders(),
      params: {
        status,
        page
      },
    },
  ).then(res => {
      dispatch(getTransactionsSuccess(res.data));
    })
    .catch(err => {
      console.log('err', err);
    })
};