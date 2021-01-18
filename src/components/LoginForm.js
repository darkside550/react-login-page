import React, {useState} from 'react'

import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

import {FacebookLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

function LoginForm({Login,error}) {

    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }

    return (
        <>
        <body>
    <div style={{height:'100%',width:'100%',display:'inline-block'}} >
    <Form className='splitdiv' id='leftdiv' onSubmit={submitHandler}>
      <div  id='leftdivcard'>
      <h1 style={{paddingTop:'20px',textAlign:'center'}}>
        Sign in to journey
      </h1>
      <FacebookLoginButton />
      <TwitterLoginButton />
      <div style={{textAlign:'center'}} >
        or use email for log in
      </div>
      <FormGroup >
        <Label>&nbsp;&nbsp;Name</Label>
        <Input type="text" placeholder='name' onChange={e => setDetails({...details,name:e.target.value})} value={details.name}/>
      </FormGroup>
      <FormGroup >
        <Label>&nbsp;&nbsp;Email</Label>
        <Input type="email" placeholder='email' onChange={e => setDetails({...details,email:e.target.value})} value={details.email}/>
      </FormGroup>
      <FormGroup >
        <Label>Password</Label>
        <Input type="password" placeholder='password' onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
      </FormGroup>
      <div style={{textAlign:'center'}}>
      <Button className='ripple2' id='leftbutton'>Sign in
      </Button>
      </div>
      </div>
    </Form>
    

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
    )
}

export default LoginForm
