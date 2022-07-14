import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ModalContext } from '../context/ModalContext'

function Signup() {
    const [userData, setUserData] = useState({
        "username": '',
        "email": '',
        "password": ''
    })
    const {setOpenSignupModal: closeModal} = useContext(ModalContext)

    const handleDataChange = e => {
        const newUserData = { ...userData }
        newUserData[e.target.id] = e.target.value
        setUserData(newUserData)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(userData);
       await axios.post('http://localhost:8000/api/signup',{
            username: userData.username,
            email: userData.email,
            password: userData.password
        })

    }
  return (
    <div className='container'>
        <div className='modal-app'>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Signup here!</h5>
                <button type="button" onClick={() => closeModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form onSubmit={ e => handleSubmit(e)}>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input onChange={handleDataChange} value={userData.username} type="type" className="form-control" id="username" aria-describedby="usernameHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input onChange={handleDataChange} value={userData.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input onChange={handleDataChange} value={userData.password} type="password" className="form-control" id="password" />
        </div>
            <div className="modal-footer">
                <button type="button" onClick={() => closeModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
        </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Signup