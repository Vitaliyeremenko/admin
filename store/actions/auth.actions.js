import * as actionTypes from '../actionTypes';
import axios from '../../axios.instance';

const loginStart = () => ({type: actionTypes.LOGIN_START});
export const loginSuccess = (payload) => ({type: actionTypes.LOGIN_SUCCESS, payload});
const loginFail = (payload) => ({type: actionTypes.LOGIN_FAIL, payload});

export const login = (email, password) => dispatch => {
    dispatch(loginStart());
    return axios.post('/admin/login',{email, password})
      .then(({data}) => {
        localStorage.setItem('userData', JSON.stringify(data));
        loginSuccess(data);
        return {
          error: false,
        };
      })
      .catch(err => {
        loginFail(err);
        return err.response.data;
      });
};
