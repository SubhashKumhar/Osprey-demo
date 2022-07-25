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
    dispatch({type: 'Store_Skills', payload: payload});
  };
};
const storeTimePreference = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_TimePreference', payload: payload});
  };
};
const storeManualResume = (payload: any) => {
  return (dispatch: Function) => {
    dispatch({type: 'Store_ManualResume', payload: payload});
  };
};
const updateManualResume = (payload: any) => {
  return (dispatch: Function) => {
    console.log('payload', payload);
    dispatch({type: 'Update_ManualResume', payload: payload});
  };
};

export {
  storeJobRoles,
  storeLocation,
  storeTimePreference,
  storeSkills,
  storeManualResume,
  updateManualResume,
};
