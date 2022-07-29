const initial_state = {
  accessToken: '',
  userData: {},
};

export const SignUpReducer = (
  state = initial_state,
  action: {type: string; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'Store_UserData':
      return {...state, userData: payload};
    case 'Store_accessToken':
      return {...state, accessToken: payload};
    default:
      return state;
  }
};
