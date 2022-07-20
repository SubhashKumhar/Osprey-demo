import {validatePhoneNumber} from '../../services/api/apiCall';

const storeLoginData = (
  payload: any,
  successCallback: Function,
  failureCallback: Function,
) => {
  return (dispatch: Function) => {
    validatePhoneNumber(
      payload,
      (resp: Object) => {
        successCallback(resp);
        dispatch({type: 'Store_PhoneNumber', payload: payload});
      },
      (error: Object) => {
        failureCallback(error);
        console.log('error', error);
      },
    );
  };
};
const storePassword = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_Password', payload: payload});
  };
};
export {storeLoginData, storePassword};
