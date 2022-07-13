const storeJobRoles = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_JobRoles', payload: payload});
  };
};

const storeLocation = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_Location', payload: payload});
  };
};
const storeSkills = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_Location', payload: payload});
  };
};
const storeTimePreference = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_TimePreference', payload: payload});
  };
};

export {storeJobRoles, storeLocation, storeTimePreference, storeSkills};
