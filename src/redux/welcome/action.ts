const InfoUserData = (payload: any) => {
  console.log('payload', payload)
  return(dispatch: any) => {
    dispatch({type: 'InfoUserData', payload: payload});
  }
}

export {InfoUserData};