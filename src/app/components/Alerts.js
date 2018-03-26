import React from 'react';
import { Alert } from 'reactstrap';

export default function BaseAlert(props) {
    const { color, isOpen, toggle } = props
    return (
        <Alert color={color} isOpen={isOpen} toggle={toggle} >
            {props.children}
        </Alert>
    );
}

