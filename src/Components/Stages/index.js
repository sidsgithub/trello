import React,{ useState } from "react";
import { Card, Button } from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";

const Stage = (stages,onhandleDelete) => {
  const [ taskInput, setTaskInput] = useState();

  console.log("stages",stages)
  // console.log("stages tasks",stages.tasks)
  const handleAddTask=()=>{
    // here, what are the things to be done.
    /*
      1 on Button click new task is to be created.
      2 this new task is to be pushed to 
      so, we will provide an input where the task will be written
       and upon click the task will be captured and pushed to the stages.task array.
    */
  //  console.log(stages.tasks);
   stages.tasks.push({name:taskInput});
  //  console.log(stages.tasks);
  }

  

  return (
    <div>
      <Card
        title = {stages.title}
        extra = {<div>
          <input placeholder= "Enter task." onChange={(event)=>setTaskInput(event.target.value)}/>&nbsp;&nbsp;
          <Button onClick={handleAddTask}>ADD</Button>&nbsp;&nbsp;
          <CloseCircleOutlined onClick={()=>onhandleDelete(stages.title)}/>
          </div>}
        style = {{ width: 400 }}
      >
        
        {stages.tasks.map(taks=>
        <p>{taks.name}</p>
          )}     
      </Card>
      <br/>
      <br/>
    </div>
  );
};

export default Stage;