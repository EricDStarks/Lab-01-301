import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function SelectedBeast({beast, onClose}) {
    // if (!beast) {
    //     return null;
    // }

    return (
        <Modal show={beast} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{beast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img width="100" src={beast.image_url} alt={beast.title} />
                <p>{beast.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SelectedBeast;