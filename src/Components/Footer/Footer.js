import React from 'react';
import Modal from './Modal'

const Footer = () => {
    return (
        <div className="bg-dark text-center py-5 text-light">
            <h2>LoopLAB</h2>
            <p>Copyright © 2018</p>
            <p>Designed By: <a href="#" style={{
                textDecoration: 'none',
                color: 'red'
            }}>Amir</a></p>
            <div className="mt-3">
            <Modal/>
            </div>
        </div>
    );
};

export default Footer;