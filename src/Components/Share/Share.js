import React from 'react';
import TitleSection from '../Ui/TitleSection'
import ShareContent from './ShareContent'

const Create = () => {
    return (
        <div id="Share">
            <TitleSection 
            bg="#007bff"
            heading="Share"
            headingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officiis iste itaque et vel commodi nulla voluptate cupiditate debitis laborum?" />
            <ShareContent />
        </div>
    );
};

export default Create;