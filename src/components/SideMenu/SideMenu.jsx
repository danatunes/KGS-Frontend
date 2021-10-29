import React, {useContext, useEffect, useRef, useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import './SideMenu.css'
import 'react-calendar/dist/Calendar.css';
import SideMenuLeftButtonSection from "../SideMenuLeftButtonSection/SideMenuLeftButtonSection";
import UserDataInSideMenu from "../UserDataInSideMenu/UserDataInSideMenu";
import SideMenuActs from "../SideMenuActs/SideMenuActs";
import SideMenuMap from "../SideMenuMap/SideMenuMap";
import SideMenuUsers from "../SideMenuUsers/SideMenuUsers";
import {Context} from "../../index";


const SideMenu = () => {

    const {store} = useContext(Context)

    return (
        <Switch>
            <div className={'menu'}>
                <SideMenuLeftButtonSection/>
                <div className={'side-menu'}>
                    <div className="side-menu--body">
                        <UserDataInSideMenu/>
                        <Switch>
                            <Route path={'/acts'} component={SideMenuActs}>
                                <SideMenuActs />
                            </Route>
                            <Route path={'/map'} component={SideMenuMap} >
                                <SideMenuMap/>
                            </Route>
                            <Route path={'/users'} component={SideMenuUsers} >
                                <SideMenuUsers />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Switch>
    );
};

export default SideMenu;