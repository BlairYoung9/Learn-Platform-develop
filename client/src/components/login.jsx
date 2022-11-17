import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"


const Login = ({setLoginUser}) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const history = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const user = { email,password};
        axios.post("http://localhost:8000/login", user)
        .then(res => 
            {
                if(res.data.successfullLogin){
                    //console.log(res);
                    //setLoginUser(res.data.user)
                    console.log("SAD")
                    history.push("/page")
                }
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required.");
        } else if (e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer.");
        } else {
            setEmailError("");
        }
    }
    //Create Password
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required.");
        } else if (e.target.value.length < 2) {
            setPasswordError("Password must be 2 characters or longer.");
        } else {
            setPasswordError("");
        }
    }

    return (
        <div className="App">
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email : </label>
                    <input type="text" onChange={handleEmail} value={email} />
                    <p>{emailError}</p>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" onChange={handlePassword} value={password} />
                    <p>{passwordError}</p>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;