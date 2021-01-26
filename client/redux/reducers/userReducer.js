const initState = { username: "username", password: "password" };

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        username: action.payload,
        password: state.password,
      };
    case "SET_PASSWORD":
      return {
        username: state.username,
        password: action.payload,
      };
    case "LOGIN_VALID":
      return {
        username: action.payload.username,
        password: action.payload.password,
      };
    case "LOGIN_INVALID":
      return {
        username: "",
        password: "",
      };
    default:
      return state;
  }
};

export default userReducer;
