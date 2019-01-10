import { goBack, navigateTo, showAlert } from 'framework7-redux';
// crypto
import aes from 'crypto-js/aes';
// import { loginValid } from '../selectors/LoginSelectors';

export const openLogin = () => navigateTo('/login/');
export const closeLogin = () => goBack();

export const userLoggedIn = (username) => ({
  type: 'USER_LOGGEDIN',
  payload: username
});
// export const validate2 = ()=>{
//   return (dispatch, getState) => {
//       let result = loginValid(getState());
//       dispatch(validate(result));
//   };
// };
export const persistUsername = (username)=>{
  return (dispatch, getState) => {
    let encrypted = aes.encrypt(username, '183927').toString();
    localStorage.setItem("tablet.strn",encrypted);
  };


// Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, '183927');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
  // localStorage.setItem("userInfo",encrypted);
}

export const login = (user)=>{
  return (dispatch, getState) => {
    dispatch(()=>{});
    dispatch(userLoggedIn(user.username));
    let encrypted = aes.encrypt(user.username, '183927').toString();
    localStorage.setItem("tablet.strn",encrypted);
  };
}
export const getUsername = ()=>{
  var bytes  = aes.decrypt(ciphertext, '183927');
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

function authenticate(user){
  return fetch()
}