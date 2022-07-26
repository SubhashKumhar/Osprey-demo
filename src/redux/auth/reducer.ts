const initial_state = {
  countryCode: '',
  phoneNo: '',
  password: '',
  countryId: '6035da44ab5f4c0f9b028a28',
  authToken: '',
};

export const AuthReducer = (
  state = initial_state,
  action: {type: string; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'Store_PhoneNumber':
      return {...state, ...payload};
    case 'Store_Password':
      return {...state, ...payload};
    case 'Store_authToken':
      return {...state, authToken: payload};
    default:
      return state;
  }
};
