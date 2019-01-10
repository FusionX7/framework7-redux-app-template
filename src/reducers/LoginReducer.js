let savedUserName = localStorage.getItem("userName");
savedUserName = savedUserName? savedUserName:'';
// var bytes  = CryptoJS.AES.decrypt(ciphertext, '183927');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
const initialState = {
  username: savedUserName,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGEDIN':
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
};
