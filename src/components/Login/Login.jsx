import React, { useState, useEffect } from 'react';
import Register from '../Register/Register';
import { Form, Button, h1 } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from "../../actions/users";
import { Container, Paper } from '@material-ui/core';
//Importing Custom Style Sheet. 
import styles from './style';
import '../../CSS/loginstyle.css';
const Login = () => {
  const classes = styles();
  const dispatch = useDispatch();

  //Methods comes here.
  const [userData, setUserData] = useState(
    {
      name: '',
      password: ''
    }
  );

  const [password, setPassword] = useState();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(userData);
  //   dispatch(createUser(userData));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

  }


  return (
    <div>
      <div className="login-component">
        <div className="login-border">
            <div className="header">
                <h2 className="main-header">Login</h2>
                <h4 className="second-header">Information</h4>
            </div>
          </div>

            <div className="login-body">
              <div className="input-wrapper">
                <lable>Name</lable><br/>
                <input className="input-field"
                       placeholder="Enter Name..."
                       type="text"
                       value={userData.name}
                       onChange={(e) => setUserData({...userData, name:e.target.value})}
                />
                <br/>
              </div>
              <div className="input-wrapper">
                <lable>Password</lable><br/>
                <input className="input-field"
                       placeholder="Enter Password..."
                       type="password"
                       value={userData.password}
                       onChange={(e) => setUserData({...userData, password: e.target.value})}
                />
              </div>
            
            <div className="button-group">
              <button className="auth-button">Login</button><br/>
              <button className= "auth-button">Registration</button>
              <div className="button-group-link">Forgot Password?</div>
            </div>
            </div>
      </div>
    </div>
  )

}

export default Login;
