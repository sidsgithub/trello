const initialState = {
  isAuthenticated: false
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      const username = localStorage.getItem("users");
      if (!username) {
        return { ...state, isAuthenticated: false };
      } else {
        return { ...state, isAuthenticated: true };
      }
    case "CLEAR_USER":
      sessionStorage.clear();
      localStorage.clear();
      return { 
        ...state, 
        isAuthenticated: false 
      };
    default:
      return state;
  }
};
export default userReducer;