import React, { useContext } from 'react'
import detailContext from '../context/Context'

const Validation = () => {
    const {userDetail} = useContext(detailContext);
    if(!userDetail) return <h1>User not logged in</h1>
    return <h1>The user name is {userDetail.name}</h1>
}

export default Validation