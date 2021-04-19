import React, { Component } from 'react';
// import Home from './Home.js';
import LandingPage from './LandingPage.js';
import fire from './config/fire';
import App from "./App.js";

class redirect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };

        this.authListener = this.authListener.bind(this);
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user});
            }
            else{
                this.setState({user:null});
            }
        });
    }

    render() {
        return (
            <div className="redirect">
                { this.state.user ? ( <App/> ) : (  <LandingPage/> ) }

            </div>
        );
    }

}

export default redirect;
