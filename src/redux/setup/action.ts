const storeJobRoles = (payload: any) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: 'Store_JobRoles', payload: payload});
  };
};

const storeLocation = (payload: any) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: 'Store_Location', payload: payload});
  };
};

export {storeJobRoles, storeLocation};
