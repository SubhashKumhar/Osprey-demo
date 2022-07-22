import Services from '../../services/Services';
import EndPoint from '../../utils/endPoint';

const StoreUserData = (payload: any) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: 'UserData', payload: payload});
  };
};

export const signUp =
  (data: any, callback: Function, ErrorCallback: Function) => async () => {
    // if (data.referralCode === '') {
    //   delete data.referralCode;
    // }
    Services.postApiCall(
      EndPoint.signUp,
      data,
      (res: any) => {
        callback(res);
      },
      (error: any) => {
        ErrorCallback(error);
      },
    );
  };

export {StoreUserData};
