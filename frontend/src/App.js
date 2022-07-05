import React, { useEffect, useState } from 'react'
import axios from "axios";
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';

function App() {

  const [content, setContent] = useState()
  const [users, setUsers] = useState([])

  useEffect(() => {
    getContent()
  }, [])

  useEffect(() => {
    getUsers()
  }, [])

  const getContent = async () => {
    const response = await axios.get('http://localhost:8000/');
    setContent(response.data);
  }

  const getUsers  = async () => {
    const response = await axios.get('http://localhost:8000/users')
    setUsers(response.data)
  }

  const listUsers = users.map(item => {
    return(
      <tbody key={item.id}>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      </tbody>
    )
  })

  return (
    <div className='container'>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
      <h1>Data</h1>
      <p>{content}</p>

      <table>
          {listUsers}
      </table>
    </div>
  )
}

export default App