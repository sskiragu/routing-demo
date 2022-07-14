import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

function Signup() {
    const {setOpenSignupModal: closeModal} = useContext(ModalContext)
  return (
    <div className='container'>
        <div className='modal-app'>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" onClick={() => closeModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="type" className="form-control" id="username" aria-describedby="usernameHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
            <div className="modal-footer">
                <button type="button" onClick={() => closeModal(false)} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Login</button>
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