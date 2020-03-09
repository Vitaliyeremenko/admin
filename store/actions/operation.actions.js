import * as actionTypes from '../actionTypes';
import axios            from '../../axios.instance';
import {getAuthHeaders} from '../../utils/Helpers';

const getDisputeStart = () => ({type: actionTypes.GET_DISPUTE_START});
const getDisputeSuccess = (payload) => ({type: actionTypes.GET_DISPUTE_SUCCESS, payload});
const getDisputeFail = () => ({type: actionTypes.GET_DISPUTE_FAIL});

export const getDispute = () =>  dispatch => {
  dispatch(getDisputeStart());
  axios.get(`/admin/operation/dispute`, {
      headers: getAuthHeaders(),
      params: {},
    },
  ).then(res => {
    dispatch(getDisputeSuccess(res.data));
  })
    .catch(err => {
      console.log('err', err);
    })
};