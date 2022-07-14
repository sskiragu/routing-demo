import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModalContext } from '../context/ModalContext'

function Navigation() {
    const { setOpenModal, setOpenSignupModal } = useContext(ModalContext)
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MYAPP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/services'>Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to='/contacts'>Contacts</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div><button type='button' onClick={() => {setOpenModal(true)}} className="btn btn-outline-primary mx-2">Login</button></div>
                <div><button type='button' onClick={() => {setOpenSignupModal(true)}} className="btn btn-outline-primary mx-2">Sign up</button></div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation