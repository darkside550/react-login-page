import React, { useState }from 'react';
import './App.css';

import LoginForm from './components/LoginForm'




function App() {

  const adminUser ={
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: '', email:''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Loged in")
      setUser({
        name: details.name,
        email: details.email
      });
    } else{
      console.log('details dont match');
      setError('details dont match');
    }

  }

  const logOut= () => {
    setUser({name: '', email:''});
    console.log("Log Out");
  }

  return (
  
    
      
      <div className="App">

      {(user.email !== "")?(
        <div className="welcome">
        <h2> Welcome, <span>{user.name} </span></h2>
        <button onClick={logOut}> Logout </button>
        </div>
      ):(
        <LoginForm Login={Login} error={error} />
      )}

      </div>
      


    
  );
}

export default App;
