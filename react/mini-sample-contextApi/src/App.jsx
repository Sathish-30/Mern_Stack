import React from 'react'
import DetailContext from './context/DetailContext'
import Login from './components/Login'
import Validation from './components/Validation'
const App = () => {
  return (
    <DetailContext>
      <h1>Health check</h1>
      <Login/>
      <Validation/>
    </DetailContext>
  )
}

export default App