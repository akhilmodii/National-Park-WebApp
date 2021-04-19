import React from 'react';
import Home from './Home.js';
import fire from './config/fire';
import Login  from './Login.js';
class Map extends React.Component {

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

clicled()
{
    console.log('The button clicked');
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
        <div className="App">
          { this.state.user ? ( <Login /> ) : ( <Map /> ) }
          <button style = {{margin: '10px'}} onClick = {this.map}>Map</button>

        </div>
    );
  }


}

export default Map; 