import { Modal, Button, Input } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

function CreateStage({onCreateStageClick}) {

  const [modalText, setModalText] = 
    useState("Enter Title of your stage : ");
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("Creating Stage");
    setConfirmLoading(true);
    onCreateStageClick(title);
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
        title="Create Stage"
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
      </Modal>
    </div>
  );
}

export default CreateStage;
