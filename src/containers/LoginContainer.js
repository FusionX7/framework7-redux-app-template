import { connect } from 'react-redux'

import LoginScreen from '../components/pages/LoginPage';
import { usernameUpdated, passwordUpdated, login, validate } from '../actions/LoginActions';
import { getUsername, getPassword, getValidation } from '../selectors/LoginSelectors';

const mapStateToProps = (state) => {
  return {
    username: getUsername(state),
    password: getPassword(state),
    valid: getValidation(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUsernameUpdated: (username) => dispatch(usernameUpdated(username)),
    onPasswordUpdated: (password) => dispatch(passwordUpdated(password)),
    onLogin: () => dispatch(login()),
    onValidate: () => dispatch(validate())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
