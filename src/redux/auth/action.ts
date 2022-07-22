import Services from '../../services/Services';
import EndPoint from '../../utils/endPoint';

const storeLoginData = (
  payload: any,
  successCallback: Function,
  failureCallback: Function,
) => {
  console.log('payload', payload);
  return (dispatch: Function) => {
    Services.putApiCall(
      EndPoint.validatePhone,
      payload,
      (resp: Object) => {
        successCallback(resp);
        dispatch({type: 'Store_PhoneNumber', payload: payload});
      },
      (error: Object) => {
        failureCallback(error);
      },
    );
  };
};
const storePassword = (payload: any, successCallback, failureCallback) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_Password', payload: payload});
  };
};
export {storeLoginData, storePassword};
