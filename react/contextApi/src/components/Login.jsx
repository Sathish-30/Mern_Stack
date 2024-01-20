import React from 'react'
import { useState , useContext } from 'react';
import UserContext from '../context/UserContext';
const Login = () => {
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName , password});
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