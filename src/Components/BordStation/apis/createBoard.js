import { Modal, Button, Input } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

function CreateBoard({onCreateBoardClick}) {

  const [modalText, setModalText] = 
    useState("Enter Title and a Description for the Board : ");
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("Creating Board");
    setConfirmLoading(true);
    onCreateBoardClick(title,description);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };


  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        shape="circle"
        icon={<PlusOutlined />}
      ></Button>
      
      <Modal
        title="Create Board"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {modalText}
        <Input
          placeholder="Title"
          onChange={event => setTitle(event.target.value)}
        />
        <Input
          placeholder="Description"
          onChange={event => setDescription(event.target.value)}
        />
      </Modal>
    </div>
  );
}

export default CreateBoard;
