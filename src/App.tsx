import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {FC, useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite"

import SideMenu from "./components/SideMenu/SideMenu";
import Login from "./components/Login/Login";
import UserInfo from "./components/UsersGrid/UserInfo";

import './App.css';
import Map from "./components/Map/Map";


const App: FC = () => {

    const {store} = useContext(Context);

    const [firstLoad,setFirstLoad]=useState(true);

    useEffect(() => {
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
        if (firstLoad){
            store.getAllActs('10');
            setFirstLoad(false);
        }
    }, [])

    if (store.isLoading) {
        return (<h2>ЗАГРУЗКА...</h2>);
    }

    if (!store.isAuth) {

        console.log(store)

        return (
            <Login/>
        )
    }

    return (
        <Router>
            <div className="App">

                <Switch>
                    <Route path={'/'}>
                        <div className={'sidebar'}>
                            <SideMenu/>
                        </div>

                        <div className='body'>
                            <Switch>
                                <Route path={'/users'}>
                                    <UserInfo/>
                                </Route>
                                <Map/>
                            </Switch>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default observer(App);
