import axios from 'axios';
import {Platform} from 'react-native';
import Device from '../utils/device';

const deviceId = Device.getUniqueId();
const devicedetail = {
  deviceType: Platform.OS === 'android' ? 0 : 1,
  deviceId: JSON.stringify(deviceId),
};

const isAndroid = Platform.OS === 'android';
const PlatformNumber = isAndroid ? 0 : 1;
const ENV_DATA = {
  BASE_URL: 'https://qspreydevapi.appskeeper.in/api/v1',
};

const $http = axios.create({
  baseURL: ENV_DATA.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    offset: new Date().getTimezoneOffset(),
    devicedetails: JSON.stringify(devicedetail),
  },
  timeout: 30000,
});

// $http.interceptors.response.use(
//   (config: any) => config,
//   (error: any) => {
// if (
//   error?.message?.includes('403') ||
//   error?.message?.includes('401') || //Session expire
//   error?.message?.includes('498')
//   // ||
//   // error?.message?.includes('440') // Session expire
// )
// {
// commonFunction.showSnackbar('Something Went Wrong', 'black');
// const route = navigationRef.current?.getCurrentRoute().name;

//   if (
//     route !== ScreenNames.SignIn &&
//     route !== ScreenNames.ForgotPassword &&
//     route !== ScreenNames.SignUp &&
//     route !== ScreenNames.FINDACCOUNT &&
//     route !== ScreenNames.ForgotPassword
//   ) {
//     handleApiError();
//   } else {
//     if (
//       !error?.message?.includes('401') &&
//       !error?.message?.includes('498')
//     ) {
//       // commonFunction.showSnackbar(error?.response?.data?.message, 'black');
//     }
//   }
// } else {
//   // commonFunction.showSnackbar(error?.response?.data?.message, 'black');
// }
//     return error;
//   },
// );

const handleApiError = () => {
  // navigationRef.current.navigate(ScreenNames.SessionExpiry);
};

// $http.interceptors.request.use(
//   async (req: any) => {
//     if (req?.headers) {
//       const getState = await store?.getState();
//       if (getState) {
//         const {authToken = '', pushToken = ''} = getState?.Auth;

//         if (pushToken && pushToken.length > 0) {
//           //@ts-ignore
//           $http.defaults.headers.devicedetails = JSON.stringify({
//             ...devicedetail,
//             ...{deviceToken: pushToken},
//           });
//         }

//         if (authToken && authToken.length > 0) {
//           $http.defaults.headers.common.Authorization = `Bearer ${authToken}`;
//         }
//       }
//     }
//     return req;
//   },
//   (err: any) => {
//     return err;
//   },
// );

const setAuthorizationToken = (token: string, _: string = '') => {
  if (token) {
    $http.defaults.headers.common.Authorization = `Bearer ${token}`;
    // $http.defaults.headers.common.offset = `${new Date().getTimezoneOffset()}`;
    // $http.defaults.headers.common.deviceId = deviceId;
    // $http.defaults.headers.common.type = `${PlatformNumber}`;

    // $http.defaults.headers.common.devicedetails = JSON.stringify({
    //   token: fcmToken + '',
    //   deviceId: deviceId,
    //   type: PlatformNumber,
    // });
    // offset:"+5:30"
    //below commented is for testing purpose
    //$http.defaults.headers.common.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik4wUkNOVGt6TjBFME16RkRRMEZEUVRNek9VRXlSRFUzUXpZd01FRXpOVGszTkRBNU56aENOdyJ9.eyJpc3MiOiJodHRwczovL2FiY28tcHJvZC5hdXRoMC5jb20vIiwic3ViIjoiZW1haWx8NWRhOGIxYmQ4ZTExZjI4Yzk2ZjI2MWIzIiwiYXVkIjpbImh0dHBzOi8vYmFja2VuZC1hcGktM3B2NXVqbGFpYS11Yy5hLnJ1bi5hcHAiLCJodHRwczovL2FiY28tcHJvZC5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTcyOTU4MzU0LCJleHAiOjE1NzI5NjU1NTQsImF6cCI6IkVnd2wwSUU3aGNFVUhnM0dvNUliT082Z1RvcHJtbHZEIiwic2NvcGUiOiJvcGVuaWQifQ.c3Ih6jV4Zqb28fDdIwcY36bSTD4eXU1uczIJxUXg1y9X5mmE_og8OqwY-7JtEUznG2Uc52nCEYgudNlvvXOOzz75AQX1fLrZkr-js-AMcNs-6pMDftK2114_PEEllNdHYFatJ3wJG3KjlxN5qtzY0XmaxxhlrMwMWG7AcCcWH3SqaUrE7TpiSTCRwun9TFDGzK9Th8Doc_jPfh6ztm-bN4btffIzlCbgHBfvFH5G4lnh-V5tTN_33GTbVY1tlGcAKMzPbnhIUk_nYjtLg2Qfoc-XeL6IOR5JdrBFIKZ8RYNF5Q1ipw3iC6cDi6tdA0h9uzZja524Un1ENK6rDCZFcQ`;
  } else {
    delete $http.defaults.headers.common.devicedetails;
  }
};

let status_code = {
  success: 200,
  successAction: 201,
  notFound: 204,
  badRequest: 400,
  Unauthorized: 401,
  invalid: 400,
  timeout: 408,
  userDelete: 410,
  serverError: 500,
};

const postApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function,
) => {
  $http
    .post(endPoint, params)
    .then((response: any) => {
      console.log('res:post', response);
      if (
        (response && response?.status === 200) ||
        (response && response?.data?.status === 200)
      ) {
        successCallback(response?.data);
      } else {
        successCallback(response?.data);
      }
    })
    .catch((error: any) => {
      console.log('error:post', error);
      errorCallback && errorCallback(error?.response);
    });
};

const putApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function,
) => {
  $http
    .put(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      console.log('error:put', error);
      errorCallback(error.response);
    });
};

const getApiCall = (
  endPoint: string,
  paramsData: string = '',
  successCallback: Function,
  errorCallback: Function,
) => {
  $http
    .get(endPoint + paramsData, {})
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      errorCallback(error?.response);
    });
};

const patchApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function,
) => {
  $http
    .patch(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      errorCallback(error?.response);
    });
};

const deleteApiCall = (
  endPoint: string,
  paramsData: string = '',
  successCallback: Function,
  errorCallback: Function,
) => {
  $http
    .delete(endPoint + paramsData, {})
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      errorCallback(error?.response);
    });
};

/**
 * Global API multi purpose handler
 * @param payload
 * @param dropdown
 */
// const handleApiError = (payload: any) => {
//   Snackbar.show({
//     text: payload,
//     duration: Snackbar.LENGTH_LONG,
//     backgroundColor: 'rgba(0,0,0,0.9)',
//     textColor: 'white',
//   });
// };

export default {
  postApiCall,
  getApiCall,
  patchApiCall,
  putApiCall,
  deleteApiCall,
  handleApiError,
  isAndroid,
  // ENV_DATA,
  setAuthorizationToken,
  // axiosInstance: $http,
  PlatformNumber,
  status_code,
  $http,
};
