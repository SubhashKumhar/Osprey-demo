const StoreUserData = (payload: any) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: 'UserData', payload: payload});
  };
};
export {StoreUserData};
