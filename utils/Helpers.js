import * as validator from "validator";

export const validateLoginForm = (email, password, setError )=> {
  // Check for undefined or empty input fields
  if (!email || !password) {
    setError("Please enter a valid email and password.");
    return false;
  }
// Validate email
  if (!validator.isEmail(email)) {
    setError("Please enter a valid email address.");
    return false;
  }
  return true;
};

export const isLogin = () => {
  return localStorage.getItem('userData');
};

export const getAuthHeaders = () => {
  return {
    Authorization: `Bearer ${JSON.parse(isLogin()).access_token}`
  }
};

export const isNotEmptyObject = object => (typeof object === "object" || typeof object === 'function') && Object.keys( object ).length !== 0;