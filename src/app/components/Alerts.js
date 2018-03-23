import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

export default function Alert(props) {
    return (
        <UncontrolledAlert color={props.color}>
            {props.children}
        </UncontrolledAlert>
    );
}

