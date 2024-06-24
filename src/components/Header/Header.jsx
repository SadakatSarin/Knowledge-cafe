import React from 'react';
import './Header.css';

import profile from '../../images/profile.png';



const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div className="brand">
                    Knowledge Cafe
                </div>
                <div className="nav-links">
                    <img src={profile} alt="User" className="user-image" />
                </div>

               
             
            </nav>

        </div>

    );
};

export default Header;