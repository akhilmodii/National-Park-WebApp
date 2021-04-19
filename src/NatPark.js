import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from './Home';
import ParkList from "./ParkList";


export default function NatPark() {
    return (
        <div>
            <h1>This is the new Page.</h1>
            {/*<BrowserRouter>*/}
            {/*    <div>*/}
            {/*        <nav>*/}
            {/*            <Link to={'/Home'}>Back</Link>*/}
            {/*        </nav>*/}
            {/*        <Switch>*/}
            {/*            <Route path={'/Home'} component={Home}/>*/}
            {/*        </Switch>*/}
            {/*    </div>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}
