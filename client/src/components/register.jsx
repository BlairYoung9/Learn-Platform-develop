import React, { useState } from 'react';
import axios from 'axios';


const UserForm = (props) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { email,password};
        axios.post("http://localhost:8000/api/users", newUser)
            .then(res =>{
                console.log(res.data)
                console.log("SUCCESS")
            })
            .catch( err => {
                console.log("ERROR")
            })
    };

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
	//     return "Thank you for submitting the form.";
	// } else {
	//     return "Welcome, please submit the form.";
	// }
    // };

    //Create Email
    const handleEmail= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required.");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer.");
        }else{
            setEmailError(""); 
        }
    }
    //Create Password
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required.");
        } else if(e.target.value.length < 2) {
            setPasswordError("Password must be 2 characters or longer.");
        }else{
            setPasswordError(""); 
        }
    }
    return (
        <div className="App">
            <p>Users</p>
            <form onSubmit={createUser}>
                <h3>{formMessage()}</h3>
                <div>
                    <label>Email : </label>
                    <input type="text" onChange={handleEmail} value={email} />
                    <p>{emailError}</p>
                </div>                 
                <div>
                    <label>Password : </label>
                    <input type="text" onChange={handlePassword} value={password} />
                    <p>{passwordError}</p>
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};

export default UserForm;