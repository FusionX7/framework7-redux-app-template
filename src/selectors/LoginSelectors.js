export const getUsername = (state) => {
  return state.login.username;
};

export const getPassword = (state) => {
  return state.login.password;
};

export const getValidation = (state) => {
  return state.login.valid;
};

export const loginValid = (state) => {
  return getPassword(state) !== '' && getUsername !== '';
};
