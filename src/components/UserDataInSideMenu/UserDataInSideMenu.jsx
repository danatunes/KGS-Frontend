import React from 'react';
import logo from "../../assets/logo/logo.png";

const UserDataInSideMenu = () => {
    return (
        <div className={'top-section'}>

            <div className={'logo'}>
                <img src={logo} alt="KGS logo"/>
            </div>

            <div className={'menu-username'}>
                <h6> Военный Абаронович
                </h6>
            </div>

        </div>
    );
};

export default UserDataInSideMenu;