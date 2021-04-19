import React from 'react';
import fire from './config/fire';
import firebase from 'firebase';
import NatPark from "./NatPark";
import logo from './logo.jpg';
import searchIcon from './search-icon.png';
// import Link from "react-router-dom/modules/Link";
import { Redirect, BrowserRouter } from 'react-router-dom';
import {Route, Switch, Link} from "react-router-dom";
import Home from './Home';


class ParkList extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    constructor(props) {
        super(props);
        this.state = {
            parksList: [],
        }
    }


    componentDidMount() {
        firebase.database().ref('data').on('value', snapshot => {
            let parks_list = [];
            snapshot.forEach(snap => {
                parks_list.push(snap.val());
            });
            this.setState({
                parksList: parks_list
            });
            console.log(parks_list)
        });
    }

    render(){
        return(
            <div className='App'>

                {/*<nav className="menu">*/}
                {/*    <h1 style={{*/}
                {/*        backgroundImage: 'url(' + logo + ')'*/}
                {/*    }}className="menu__logo"> National Park </h1>*/}

                {/*    <div className="menu__right">*/}
                {/*        <ul className="menu__list">*/}
                {/*            <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>*/}
                {/*            <li className="menu__list-item"><a className="menu__link" href="#">List</a></li>*/}
                {/*            <li className="menu__list-item"><a className="menu__link" href="#">Map</a></li>*/}
                {/*            <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>*/}
                {/*            <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>*/}
                {/*        </ul>*/}

                {/*        <button style={{backgroundImage: 'url(' + searchIcon + ')'}} className="menu__search-button"/>*/}

                {/*        <form className="menu__search-form hide" method="POST">*/}
                {/*            <input className="menu__search-input" placeholder="Type and hit enter"/>*/}
                {/*        </form>*/}
                {/*    </div>*/}
                {/*</nav>*/}

                <div className='container'>
                    <table id='example' className='display'>
                        <thead className='thead'>
                        <tr>
                            <th>Park Name</th>
                            <th>Park Code</th>
                            <th>State</th>
                        </tr>
                        </thead>
                        <tbody>
                        <BrowserRouter>
                            {this.state.parksList.map(data => {
                                return(
                                    <tr>
                                        <nav>
                                            <td>{data.fullName}</td>
                                            <td>{data.parkCode}</td>
                                            <td>{data.states}</td>
                                            {/*<Link to='/NatPark'>View Park</Link>*/}
                                        </nav>
                                        <Switch>
                                            <Route path={'/Natpark'} component={NatPark}/>
                                            {/*<Route path={'/Home'} component={Home}/>*/}
                                        </Switch>
                                    </tr>
                                );
                            })}
                        </BrowserRouter>
                        </tbody>
                    </table>
                    <button style = {{margin: '10px'}} onClick = {this.logout}>Logout</button>
                </div>
            </div>
        )
    }

}

export default ParkList;