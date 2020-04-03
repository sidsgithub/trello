const initialState = {
    boardsArray:[
        { 
            id :1 ,
            title: "Default Board",
            description: "",
            stages:[
                  { title : "NEW", description : "something", tasks:
                    [ {name:"task1"},{name:"task2"},{name:"task3"} ] 
                  },
                  { title : "DONE", description : "something", tasks:
                    [ {name:"task101"},{name:"task12"},{name:"task123"} ] 
                  }
            ]
          }
    ]
};
  
  const BoardReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_BOARD":
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
  export default BoardReducer;