import React, {useContext} from 'react';
import logo from "../../assets/logo/logo.png";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

import styles from './UserDataInSideMenu.module.css'

const UserDataInSideMenu = () => {

    const {store} = useContext(Context);

    console.log(store.user.id)


    return (
        <div className={styles.topSection}>

            <div className={styles.logo}>
                <img src={store.user.photoUrl ? store.user.photoUrl : logo} alt="KGS logo"/>
            </div>

            <div className={styles.menuUsername}>
                <h6> {store.user.first_name}  {store.user.last_name}
                </h6>
            </div>

        </div>
    );
};

export default observer(UserDataInSideMenu);