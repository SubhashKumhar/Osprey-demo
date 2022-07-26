import Services from '../../services/Services';
import EndPoint from '../../utils/endPoint';

export const StoreUserData = (
  payload: any,
  successCallback: Function,
  failureCallback: Function,
) => {
  return (dispatch: Function) => {
    Services.postApiCall(
      EndPoint.signUp,
      payload,
      (res: any) => {
        dispatch({
          type: 'Store_UserData',
          payload: payload,
        });
        dispatch({
          type: 'Store_accessToken',
          payload: res.data.accessToken,
        });
        successCallback(res);
      },
      (error: any) => {
        console.log('failure', error);
        failureCallback(error);
      },
    );
  };
};
