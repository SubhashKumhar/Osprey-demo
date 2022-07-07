const initial_state = {
  jobRoles: [],
  skills: [],
  location: [],
  timePreference: [],
};

export const SetupReducer = (
  state = initial_state,
  action: {type: string; payload: any},
) => {
  const {type, payload} = action;
  switch (type) {
    case 'Store_JobRoles':
      return {...state, jobRoles: payload};
    case 'Store_Location':
      return {...state, location: payload};
    default:
      return state;
  }
};
