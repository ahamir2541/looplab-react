import React from 'react';
import CheckBox from './CheckBox'

const ContentText = (props) => {
    return (
        <div>
            <h3>{props.title} </h3>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aliquam sed cum, sunt, quia dicta? Animi, commodi, neque incidunt non atque aliquid voluptates nostrum, inventore tenetur asperiores a necessitatibus ut.</p>
            <CheckBox iconbg={props.iconbg}
                iconColor={props.iconColor}
                lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officiis iste itaque et vel commodi nulla voluptate cupiditate debitis laborum?" />
            <CheckBox iconbg={props.iconbg}
                iconColor={props.iconColor}
                lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officiis iste itaque et vel commodi nulla voluptate cupiditate debitis laborum?" />
            
        </div>
    );
};

export default ContentText;