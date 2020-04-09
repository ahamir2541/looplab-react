import React from 'react';

const ContentImg = (props) => {
    return (
        <div>
            <img className="img-fluid rounded" src={props.img} alt={props.img} />
        </div>
    );
};

export default ContentImg;