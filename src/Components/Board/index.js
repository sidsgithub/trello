import React from "react";
import { Descriptions,Popover } from "antd";
import Stage from "../Stages";
import { useParams } from "react-router-dom";
import { Tooltip } from "antd";
import CreateStage from '../Stages/createStage/createStage';

function Board() {
  let { id } = useParams();

  console.log({ id });

  const boardsArray = localStorage.getItem("BOARDS");

  const boards = JSON.parse(boardsArray);

  const board = boards[0];

  console.log("boards", board.stages);

  const handleDeleteStage = stageName => {
    const stages = board.stages;
    console.log(stages);
    const newstage = stages.filter(stage => stage.title !== stageName);
    console.log(newstage);
    board.stages = newstage;
    console.log(board);
    localStorage.setItem("BOARDS", JSON.stringify(board));
  };

  const handleAddStage = (title) => {
    board.stages.push( {title,description:"",tasks:[]} )
    console.log(board.stages)
  };

  return (
    <div>
      <Descriptions title="Board Details">
        <Descriptions.Item label="Title">{board.title}</Descriptions.Item>

        {board.description ? (
          <Descriptions.Item label="Description">
            {board.description}
          </Descriptions.Item>
        ) : null}
      </Descriptions>

      {board.stages.map(stage => (
        <Stage {...stage} onhandleDelete={name => handleDeleteStage(name)} />
      ))}

    <Popover>
      <Tooltip title="add stage">
        <CreateStage onCreateStageClick = {(title)=>handleAddStage(title)}/>
        {/* <Button type="primary" shape="circle" icon={<PlusOutlined/>} onClick={handleAddStage} /> */}
      </Tooltip>
    </Popover>


    </div>
  );
}

export default Board;
