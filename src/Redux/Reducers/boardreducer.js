const initialState = {
  justAnothervalue: "",
  boardsArray: [
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
    //   case "ADD_BOARD":
    //     const boards = state.boardsArray
    //     console.log("boards",boards)
    //     localStorage.setItem("BOARDS",boards);
    //     return boards
    case "SET_BOARD":
        console.log("from reducer SET_BOARD",state.boardsArray)
      localStorage.setItem("BOARDS", JSON.stringify(state.boardsArray));
      return state

    case "ADD_BOARD":
        console.log("from reducer ADD_BOARD",state.boardsArray)
      return Object.assign({}, state, {
        boardsArray: [...state.boardsArray, payload]
      });

    default:
      return state;
  }
};
export default BoardReducer;
