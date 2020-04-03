import React, { useState,
   useEffect 
  } from "react";
import { Button, Tooltip, Popover } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import CreateBoard from "./apis/createBoard";
import {Redirect} from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";

const content = (
  <div>
    <p>Click to add a board.</p>
  </div>
);

function BoardStation() {

  // const boardsFromStorage = JSON.parse(localStorage.getItem("BOARDS"))
  const [ redirection,setRedirection] = useState(false);

  const dispatch = useDispatch();

  const boardsArr = useSelector(state => state.BoardReducer.boardsArray);

  const [boardsArray, setBoardsArray] = useState(boardsArr);

  // useEffect(()=>{dispatch({type:"SET_BOARD"})},[]);//did mount 
  useEffect(()=>{setBoardsArray(boardsArr)},[boardsArr])

  // setBoardsArray(

    // )


  
  // console.log("boardsArr",boardsArr);
  // useEffect(()=>{setBoardsArray(boardsArr)},[boardsArr]) // why is this not working 
  console.log("board from reducers state",boardsArr);

  // localStorage.setItem("BOARDS",JSON.stringify(boardsArray));

  // wrong boardsArray.push({title:"Default Board",description:""});
  // setBoardsArray( [...boardsArray, {
  //   title: "Default Board",
  //   description: ""
  // } ] );


  const addBoard = (title, description) => {
    dispatch({type:'ADD_BOARD',payload:{
      title,
      description,
      stages:[]
    }},[dispatch]);
    // setBoardsArray();
  };

  const handleCreateBoard =(title,description)=>{
    addBoard(title,description);
    console.log("some data coming from child component",title);
  }

  const handleButtonClick =(id)=>{
    setRedirection(true);
  }

  console.log(boardsArray);

  return (
    <div>
      {boardsArray.map(boards => (
        <Button
          type="link"
          icon={<AppstoreAddOutlined/>}
          block
          onClick={()=>handleButtonClick(boards.id)}
        >
          {boards.title}
        </Button>
      ))}

      <Popover content={content}>
        <Tooltip>
          <CreateBoard 
            onCreateBoardClick = {

              (title,description) => handleCreateBoard(title,description) 

              } />
        </Tooltip>
      </Popover>

      {redirection && <Redirect to="/board/1"/>}
    </div>
    
  );
}

export default BoardStation;