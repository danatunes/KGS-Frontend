import React, {FC, useContext, useState} from 'react';

import {Context} from "../../index";
import {observer} from 'mobx-react-lite';

import imgEarth from '../../assets/loginImg.png';
import logo from '../../assets/logoLogin.png';

import './Login.css'

const Login: FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

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
                               aria-describedby="addon-wrapping"
                               value={username}
                               onChange={e => setUsername(e.target.value)}
                        />

                        <input type="password"
                               className="form-control"
                               placeholder="Password"
                               aria-label="Password"
                               aria-describedby="addon-wrapping"
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => store.login(username, password)}
                    >
                        Войти
                    </button>
                </div>
                <div className={'version_control'}><label>version : v1</label></div>
            </div>
        </div>
    );
};

export default observer(Login);