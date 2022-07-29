import Services from '../../services/Services';
import EndPoint from '../../utils/endPoint';

const storeLoginData = (
  payload: any,
  successCallback: Function,
  failureCallback: Function,
) => {
  return (dispatch: Function) => {
    Services.putApiCall(
      EndPoint.validatePhone,
      {
        countryCode: payload.countryCode,
        phoneNo: payload.phoneNo,
        countryId: payload.countryId,
      },
      (resp: any) => {
        if (resp.status === 200) {
          successCallback(resp);
          dispatch({type: 'Store_PhoneNumber', payload: payload});
        } else {
          failureCallback(resp);
        }
      },
      (error: Object) => {
        failureCallback(error);
      },
    );
  };
};
const storePassword = (
  payload: any,
  successCallback: Function,
  failureCallback: Function,
) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_Password', payload: payload});
  };
};

const resendOtp = (
  payload: Object,
  successCallback: Function,
  failureCallback: Function,
) => {
  return (dispatch: Function) => {
    Services.postApiCall(
      EndPoint.resendOtp,
      payload,
      (res: any) => {
        dispatch({
          type: 'Store_accessToken',
          payload: res.data.accessToken,
        });
        dispatch({type: 'Store_authToken', payload: res.data.authToken});
        successCallback(res);
      },
      (err: Object) => {
        failureCallback(err);
      },
    );
  };
};

const storeCountryId = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_CountryId', payload});
  };
};

export {storeLoginData, storePassword, resendOtp, storeCountryId};
