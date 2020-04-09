import React from 'react';
import CheckIcon from './CheckIcon'
import LoremText from './LoremText'

const CheckBox = (props) => {
    return (
        <div className="d-flex">
            <div className="checkIcon mr-5 mt-2 justify-content-start">
                <CheckIcon bg={props.iconbg} color={props.iconColor} />
            </div>
            <div className="loremText justify-content-end ">
                <LoremText lorem={props.lorem} />
            </div>
        </div>
    );
};

export default CheckBox;