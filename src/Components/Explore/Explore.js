import React from 'react';
import TitleSection from '../Ui/TitleSection'
import ExploreContent from './ExploreContent'

const Explore = () => {
    return (
        <div id="Explore">
            <TitleSection 
            bg="#212529"
            heading="Explore"
            headingText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla ducimus veniam repellat nostrum, placeat aperiam maiores! Dicta, voluptatum molestiae." />
            <ExploreContent/>
        </div>
    );
};

export default Explore;