import Services from '../../services/Services';
import EndPoint from '../../utils/endPoint';

/**
 *
 * @param payload
 * @returns
 */

const storeJobRoles = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_JobRoles', payload: payload});
  };
};

/**
 *
 * @param payload
 * @returns
 */

const storeLocation = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_Location', payload: payload});
  };
};

/**
 *
 * @param payload
 * @returns
 */

const storeSkills = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_Skills', payload: payload});
  };
};

/**
 *
 * @param payload
 * @returns
 */
const storeTimePreference = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_TimePreference', payload: payload});
  };
};

/**
 *
 * @param payload
 * @returns
 */

const storeManualResume = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_ManualResume', payload: payload});
  };
};
/**
 *
 * @param payload
 * @returns
 */
const updateManualResume = (payload: any) => {
  return (dispatch: Function) => {
    console.log('payload', payload);
    dispatch({type: 'Update_ManualResume', payload: payload});
  };
};

/**
 *
 * @param payload
 * @param successCallback
 * @param failureCallback
 */

const storeProfileType = (
  payload: any,
  successCallback: Function,
  failureCallback: Function,
) => {
  return (dispatch: Function) => {
    Services.postApiCall(
      EndPoint.selectRole,
      {
        accountType: payload,
      },
      (resp: any) => {
        successCallback(resp);
        dispatch({type: 'Store_ProfileType', payload: payload});
      },
      (error: any) => {
        failureCallback(error);
      },
    );
  };
};

export {
  storeJobRoles,
  storeLocation,
  storeTimePreference,
  storeSkills,
  storeManualResume,
  updateManualResume,
  storeProfileType,
};
