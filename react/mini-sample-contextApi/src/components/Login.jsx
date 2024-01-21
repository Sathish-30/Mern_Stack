import React, { useContext, useState } from 'react'
import detailContext from '../context/Context';

const Login = () => {
    const [name , setName] = useState("");
    const [password , setPassWord] = useState("");
    const {setUserDetail} = useContext(detailContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserDetail({name , password});
        console.log(`The name is ${name} and the password is ${password}`);
    }
  return (
    <div>
        <input type="text" name="name" id="name" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e) => setPassWord(e.target.value)} />
        <br />
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login