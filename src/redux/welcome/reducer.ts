const initial_state = {
  infoData: [],
};

export const welcomeInfoDataReducer = (
  state = initial_state,
  action: {type: string; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'InfoUserData': {
      console.log('first', payload);
      return {...state, infoData: payload};
    }
    default:
      return state;
  }
};
