import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);
  if(!user) return <h1>Not Logged in</h1>
  return (
    <div>Profile : {user.userName}</div>
  )
}

export default Profile;