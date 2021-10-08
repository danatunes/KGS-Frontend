import React, {useEffect} from 'react';
import { Route, Switch} from 'react-router-dom';

import './SideMenu.css'
import 'react-calendar/dist/Calendar.css';
import SideMenuLeftButtonSection from "../SideMenuLeftButtonSection/SideMenuLeftButtonSection";
import UserDataInSideMenu from "../UserDataInSideMenu/UserDataInSideMenu";
import SideMenuActs from "../SideMenuActs/SideMenuActs";
import SideMenuMap from "../SideMenuMap/SideMenuMap";
import SideMenuUsers from "../SideMenuUsers/SideMenuUsers";


const SideMenu = () => {

    return (
        <Switch>
            <div className={'menu'}>
                <SideMenuLeftButtonSection/>
                <div className={'side-menu'}>
                    <div className="side-menu--body">
                        <UserDataInSideMenu/>
                        <Switch>
                            <Route path={'/acts'} component={SideMenuActs}/>
                            <Route path={'/map'} component={SideMenuMap}/>
                            <Route path={'/users'} component={SideMenuUsers}/>
                        </Switch>
                    </div>
                </div>

            </div>
        </Switch>
    );
};

export default SideMenu;