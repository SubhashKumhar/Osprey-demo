const initial_state = {
  countryCode: '',
  phoneNumber: '',
  password: '',
  countryId: '',
};

export const AuthReducer = (
  state = initial_state,
  action: {type: string; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'Store_PhoneNumber':
      return {...state, phoneNumber: payload};
    default:
      return state;
  }
};
