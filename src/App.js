import React, {Component} from 'react';
import './App.css';

import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

import {FacebookLoginButton, TwitterLoginButton } from 'react-social-login-buttons';


function App() {

  return (
    <>
    <body>
    <div style={{height:'100%',width:'100%',display:'inline-block'}} >
    <form className='splitdiv' id='leftdiv'>
      <div  id='leftdivcard'>
      <h1 style={{paddingTop:'20px',textAlign:'center'}}>
        Sign in to journey
      </h1>
      <FacebookLoginButton />
      <TwitterLoginButton />
      <div className="text-center ">
        or use email for log in
      </div>
      <FormGroup >
        <label>&nbsp;&nbsp;&nbsp;Email</label>
        <input type="email" placeholder='email'/>
      </FormGroup>
      <FormGroup >
        <label>Password</label>
        <input type="password" placeholder='password'/>
      </FormGroup>
      <div style={{textAlign:'center'}}>
      <button className='ripple2' id='leftbutton'>Sign in
      </button>
      </div>
      </div>
    </form>
    

    <div className='splitdiv' id='rightdiv'>
      <div id="rightdivcard">
        <h1 style= {{paddingTop:'20px',textAlign:'center',color:'white'}}>
          Hello, Friend!
        </h1>
        <p style={{color:'white',textAlign:'center'}}>You can start journey and have fun with us</p>
        <div style={{textAlign:'center'}}>
          <button id='rightbutton' className='ripple'>Sign Up</button>
        </div>
      </div>
    </div>
    </div>
    </body>
    </>
  );
}

export default App;
