const initial_state = {
    data: []
  };
  
  export const SignUpReducer = (
    state = initial_state,
    action: {type: string; payload: any},
  ) => {
    const {type, payload} = action;
    switch (type) {
      case 'UserData':
        return {...state, data: payload};
      default:
        return state;
    }
  };