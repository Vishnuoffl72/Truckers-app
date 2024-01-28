import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaLock} from "react-icons/fa";
import './Loginpage.css'

const Loginpage = () => {
  return (
    <main className='container'>
        <div><h2>Login</h2></div>
        <div  className='input'>
          <div className='inputs'>
              <div className='icon'><FaEnvelope /></div>
              <input type="text" placeholder='Email id' />


          </div>
          <div className='inputs'>
              <div className='icon'><FaLock /></div>
              <input type="password" placeholder='Password' />
          </div>
        </div>
        <div className='button'>
            <button>Login</button>
        </div>
    </main>
  )
}

export default Loginpage