import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React video for context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App