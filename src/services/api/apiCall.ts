import axios from 'axios';
import EndPoint from '../../utils/endPoint';

const BASE_URL = 'http://qspreydevapi.appskeeper.in';

const loginRequest = (
  payload: Object,
  successCallback: Function,
  failureCallback: Function,
) => {
  axios
    .put(`${BASE_URL}${EndPoint.validatePhone}`, {
      countryCode: '+1',
      phoneNo: '9990456786',
      countryId: 'mongoId',
    })
    .then((resp: Object) => {
      console.log('resp', resp);
      successCallback(resp);
    })
    .catch((error: Object) => {
      failureCallback(error);
    });
};
const validatePhoneNumber = (
  payload: Object,
  successCallback: Function,
  failureCallback: Function,
) => {
  axios
    .get(`${BASE_URL}${EndPoint.validatePhone}`, payload)
    .then((resp: Object) => {
      console.log('resp', resp);
      successCallback(resp);
    })
    .catch((error: Object) => {
      failureCallback(error);
    });
};

export {loginRequest, validatePhoneNumber};
