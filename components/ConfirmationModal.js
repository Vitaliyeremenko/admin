import React                                                from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const ConfirmationModal = ({isOpen, hide, submit, title, text}) => {
  return (
    <Modal isOpen={isOpen} toggle={hide} fade={null}>
      <ModalHeader toggle={hide}>{title}</ModalHeader>
      <ModalBody>
        {text}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submit}>Confirm</Button>{' '}
        <Button color="secondary" onClick={hide}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;