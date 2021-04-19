import React from 'react';
import Home from './Home.js';
import fire from './config/fire';


class Login extends React.Component {

    login(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Successfully logged in...");
        })
        .catch((err) => {
            console.log("Error: " + err.toString());
        });

    }

    signUp(){
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) =>{
            console.log("Successfully signed in...");
        })
        .catch((err) => {
            console.log("Error: " + err.toString());
        });
   
    }
    render()
    {

        return (
      <div style= {{textAlign: 'center'}}>
          <div>
              <div> Email</div>
              <input id = "email" placeholder = "Enter Email.." type="text"/>  
          </div>
          <div>
              <div> Passowrd</div>
              <input id = "password" placeholder= "Enter Password.." type = "text"/>
          </div>
          <button style = {{margin: '10px'}} onClick = {this.login}>Login</button>
          <button style = {{margin: '10px'}} onClick = {this.signUp}>Sign Up</button>

          



      </div>

        )
    }

}

export default Login;