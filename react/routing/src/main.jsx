import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import { Layout , Home , About, Contact , Github, User } from './components/index'
import { getGitHubInfo } from './components/github/Github'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
       <Route path="" element = {<Home/>}></Route>
       <Route path="about" element = {<About/>}></Route>
       <Route path="contact" element = {<Contact/>}></Route>
       <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}></Route>
       </Route>
       <Route 
       loader={getGitHubInfo}
       path="github" 
       element = {<Github/>}>
       </Route>
       <Route path='*' element = {<div className="flex justify-center items-center h-screen"><h4 className='text-4xl'>404 webpage not found</h4></div>}></Route>
    </Route>
   
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
