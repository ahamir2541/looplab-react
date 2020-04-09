import React from 'react';
import TitleSection from '../Ui/TitleSection'
import CreateContent from './CreateContent'

const Create = () => {
    return (
        <div id="Create">
            <TitleSection 
            bg="#007bff"
            heading="Create"
            headingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officiis iste itaque et vel commodi nulla voluptate cupiditate debitis laborum?" />
            <CreateContent/>
        </div>
    );
};

export default Create;