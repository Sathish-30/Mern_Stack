import React from 'react'
import { useState , useContext } from 'react';
import UserContext from '../context/UserContext';
const Login = () => {
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");

    const {user , setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        console.log(`Button clicked and the ${userName} and the password is ${password}`)
        e.preventDefault();
        setUser({userName , password});
        console.log(`The user name is ${user.userName}`);
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
                name="username"
                value={userName} 
                placeholder='Username'
                onChange={(e) => setUserName(e.target.value)} />
            {" "}
            <input type="password" 
                    name="password" 
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            <button type = "submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login