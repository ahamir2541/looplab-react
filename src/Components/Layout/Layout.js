import React from 'react';
import Navbar from '../Navbar/Navbar'
import Home from '../home/Home'
import Explore from '../Explore/Explore'
import Create from '../Create/Create'
import Share from '../Share/Share'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <div>
           <Navbar/>
           <Home/>
           <Explore/>
           <Create/>
           <Share/>
           <Footer/>
        </div>
    );
};

export default Layout;