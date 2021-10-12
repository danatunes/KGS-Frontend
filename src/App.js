import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import Map from "./components/Map/Map";
import SideMenu from "./components/SideMenu/SideMenu";
import Login from "./components/login/Login";

import './App.css';
import UserInfo from "./components/UsersGrid/UserInfo";


function App() {
    return (
        <Router>
            <Switch>

                <Route exact path={'/login'}>
                    <Login/>
                </Route>

                <Route path={'/'}>
                    <div className="App">

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

                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
