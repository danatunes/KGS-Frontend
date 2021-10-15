import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {FC, useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite"

import Map from "./components/Map/Map";
import SideMenu from "./components/SideMenu/SideMenu";
import Login from "./components/Login/Login";
import UserInfo from "./components/UsersGrid/UserInfo";

import './App.css';


const App: FC = () => {

    const {store} = useContext(Context);

    useEffect(() => {
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    if (store.isLoading){
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
