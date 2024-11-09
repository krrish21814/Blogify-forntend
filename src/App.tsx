
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { UserBlogs } from './pages/UserBlogs'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/blog/:id'   element={<Blog/>}/>
      <Route path='/blogs'  element={<Blogs/>}/>
      <Route path='/publish' element ={<Publish/>}/>
      <Route path='/bulk/user' element={<UserBlogs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App