import React from 'react';

import imgEarth from '../../assets/loginImg.png';
import logo from '../../assets/logoLogin.png';

import './Login.css'

const Login = () => {
    return (
        <div className={'wrapper'}>
            <div className={'photo-half'}>
                <img src={imgEarth} alt="PHOTO of EARTH"/>
            </div>
            <div className={'login-half'}>
                <div className={'login-half--form'}>
                    <div className={'login-half-form--logo'}>
                        <img src={logo} alt="logo"/>
                        <p>Добро пожаловать!</p>
                    </div>

                    <div className={'login-half-form--inputs'}>
                        <input type="text"
                               className="form-control"
                               placeholder="Username"
                               aria-label="Username"
                               aria-describedby="addon-wrapping"/>

                        <input type="text" className="form-control"
                               placeholder="Username" aria-label="Username"
                               aria-describedby="addon-wrapping"/>
                    </div>
                    <button type="button" className="btn btn-primary">Войти</button>
                </div>
            </div>
        </div>
        // <div>
        //     <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        //         <div className="card card0 border-0">
        //             <div className="row d-flex">
        //                 <div className="col-lg-6">
        //                     <div className="card1 pb-5">
        //                         <div className="row px-3 justify-content-center mt-4 mb-5 border-line"><img
        //                             src={'https://www.gharysh.kz/upload/landing/693/KGS.jpg'} className="image-for-logo-company"/></div>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-6">
        //                     <div className="card2 card border-0 px-4 py-5">
        //                         <div className="row mb-4 px-3 justify-content-center">
        //                             <img
        //                                 src={logo} className="image"/>
        //                         </div>
        //
        //                         <div className="row px-3"><label className="mb-1">
        //                             <h6 className="mb-0 text-sm">Логин</h6>
        //                         </label> <input className="mb-4" type="text" name="email"
        //                                         placeholder="Логин"/></div>
        //                         <div className="row px-3"><label className="mb-1">
        //                             <h6 className="mb-0 text-sm">Пароль</h6>
        //                         </label> <input type="password" name="password" placeholder="Пароль"/></div>
        //                         <div className="row mb-3 px-3">
        //                             <button type="submit" className="btn btn-blue text-center">Логин</button>
        //                         </div>
        //
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="bg-blue py-4">
        //                 <div className="row px-3"><small className="ml-4 ml-sm-5 mb-2">KGS &copy; 2019. All rights
        //                     reserved.</small>
        //                     <div className="social-contact ml-4 ml-sm-auto"><span
        //                         className="fa fa-facebook mr-4 text-sm"></span> <span
        //                         className="fa fa-google-plus mr-4 text-sm"></span> <span
        //                         className="fa fa-linkedin mr-4 text-sm"></span> <span
        //                         className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Login;