import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CustomModal extends React.Component {


    render() {
        const { toggle, show, children, title } = this.props
        return (
            <div>
                <Modal isOpen={show} toggle={toggle} backdrop="static">
                    <ModalHeader toggle={toggle}><b>{title}</b></ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

