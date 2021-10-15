import React, {useContext} from 'react';
import UserGrid from "../UsersGrid/UserGrid";

import styles from './SideMenuUsers.module.css'
import {Context} from "../../index";

const SideMenuUsers = () => {

    const arrDataUsers = [
        {
            id: 1,
            login: 'Логин: spacex@gharysh.kz',
            fullName: 'Илон Сейсембай',
            role: 'Отан қорғаушы'
        },
        {
            id: 2,
            login: 'Логин: spacex@gharysh.kz',
            fullName: 'Илон Сейсембай',
            role: 'Ғарыш әскері'
        },
        {
            id: 4,
            login: 'Логин: spacex@gharysh.kz',
            fullName: 'Илон Сейсембай',
            role: 'Админ'
        },{
            id: 5,
            login: 'Логин: spacex@gharysh.kz',
            fullName: 'Илон Сейсембай',
            role: 'Админ'
        },{
            id: 6,
            login: 'Логин: spacex@gharysh.kz',
            fullName: 'Илон Сейсембай',
            role: 'Админ'
        },{
            id: 7,
            login: 'Логин: spacex@gharysh.kz',
            fullName: 'Илон Сейсембай',
            role: 'Админ'
        },{
            id: 8,
            login: 'Логин: spacex@gharysh.kz',
            fullName: 'Илон Сейсембай',
            role: 'Админ'
        }
    ]

    const {store} = useContext(Context);


    return (
        <React.Fragment>
            <div className="divider"></div>

            <div className={'gridPhoto'}>
                    <div>
                        <input type="checkbox"/>
                        <label htmlFor="scales" id="checkbox">Выбрать все</label>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary position-relative">
                            Скачать
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                     </span>
                        </button>
                    </div>
                </div>

                <div className="divider"></div>
                    <div className={styles.wrapperForGrid}>
                        <div className={'gridPhotos'}>
                                {arrDataUsers.map((user) =>
                                    <UserGrid key={user.id} data={user}/>)
                                }
                        </div>
                        <div className={styles.bottomMenu}>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-center bottomMenuBtnsForDownload">
                                <button className="btn btn-primary" type="button">Добавить пользователя</button>
                            </div>
                        </div>
                        <button className={'exit'} onClick={()=>store.logout()}>
                            <div className={` justify-content-md-center`}>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.7969 21.4375V23.625C19.7969 26.0374 17.8343 28 15.4219 28H4.42969C2.01724 28 0.0546875 26.0374 0.0546875 23.625V4.375C0.0546875 1.96255 2.01724 0 4.42969 0H15.4219C17.8343 0 19.7969 1.96255 19.7969 4.375V6.5625C19.7969 7.16663 19.3073 7.65625 18.7031 7.65625C18.099 7.65625 17.6094 7.16663 17.6094 6.5625V4.375C17.6094 3.16888 16.628 2.1875 15.4219 2.1875H4.42969C3.22357 2.1875 2.24219 3.16888 2.24219 4.375V23.625C2.24219 24.8311 3.22357 25.8125 4.42969 25.8125H15.4219C16.628 25.8125 17.6094 24.8311 17.6094 23.625V21.4375C17.6094 20.8334 18.099 20.3438 18.7031 20.3438C19.3073 20.3438 19.7969 20.8334 19.7969 21.4375ZM27.2538 12.1212L24.8046 9.672C24.3774 9.24475 23.6848 9.24475 23.2578 9.672C22.8305 10.099 22.8305 10.7916 23.2578 11.2186L24.9999 12.9609H11.8672C11.2631 12.9609 10.7734 13.4506 10.7734 14.0547C10.7734 14.6588 11.2631 15.1484 11.8672 15.1484H24.9999L23.2578 16.8907C22.8305 17.3178 22.8305 18.0103 23.2578 18.4374C23.4714 18.651 23.7513 18.7578 24.0311 18.7578C24.3112 18.7578 24.591 18.651 24.8046 18.4374L27.2538 15.9882C28.32 14.922 28.32 13.1874 27.2538 12.1212Z"
                                            fill="black"/>
                                    </svg>
                                    Выйти
                            </div>
                        </button>
                    </div>

        </React.Fragment>
    );
};

export default SideMenuUsers;