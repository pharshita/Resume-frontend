import { display } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Types_resume() {
 const cliked=()=>{
  window.localStorage.clear();
  window.location.href="/signin"
 }

  return (
    <div>
      <div className='row pr-5'>
        <div className='row' style={{display:"flex",justifyContent:"space-between"}}>
        <div className='col-sm-11 mt-5 text-center'  >
          <h2>Types Of Resume</h2>
          <div className="dropdown">
            <button className="dropbtn">Select One</button>
            <div className="dropdown-content">
              <Link to="/basic"><a>Basic</a></Link>
              <Link to="/profession"><a>Professional</a></Link>
              <Link to="/tamplates"><a>Tamplates</a></Link>
            </div>
          </div>
        </div>


        <div className='col-sm-1 mt-5 text-center'>
          <button className='dropbtn' onClick={cliked}>Logout</button>
        </div>
        </div>


      </div>
    </div>
  )
}
