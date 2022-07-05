const storePhoneNumber = (payload: any) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: 'Store_PhoneNumber', payload: payload});
  };
};
export {storePhoneNumber};
