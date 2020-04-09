import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const CheckIcon = (props) => {
    return (
        <div style={{
            padding: '4px 8px',
            background: `${props.bg}`,
            color : `${props.color}`,
            borderRadius: '5px',
            fontSize: '18px',
           
        }}>
            <FontAwesomeIcon icon={faCheck} /> 
        </div>
    );
};

export default CheckIcon;