import React from "react";
import { Modal, Button } from "react-bootstrap";

const NewIConfirmationModal = ({
  title,
  show,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal show={show} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Hủy
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewIConfirmationModal;
