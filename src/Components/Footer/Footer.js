import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className="row">
                <div className="col-lg-7">
                    This is foooter left part
                </div>
                <div className="col-lg-5">
                    This is right part
                </div>
            </div>
        </div>
    );
};

export default Footer;