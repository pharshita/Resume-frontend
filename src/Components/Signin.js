import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../config'

export default function Signin() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    function emailHandler(e){
        setEmail(e.target.value)
    }
    function passwordHandler(e){
        setPassword(e.target.value)
    }


    function submitHandler(e){
        e.preventDefault();
        let data = new FormData()

        data.append('email',email)
        data.append('password',password)
        // let url="http://127.0.0.1:8000"
        let ngrok="https://4d4f-2405-201-300b-7072-7568-f976-cbbf-7a4d.in.ngrok.io"


        axios.post(`${BASE_URL}/api/login/`, data)
        // axios.post(`${ngrok}/api/login/`,data)
        .then((res) => {
            window.localStorage.setItem('id',res.data.id);
            window.localStorage.setItem('token',res.data.access)
            // window.location.href="/user"
            window.location = "/user";
        }).catch((err) => {
            console.log(err)
        })
    }
  return (
    <div className='signinbg'>
        <div className='container'>
            <div className='row signinform' >
                <div className='signin_containt' style={{marginTop:"100px",width:"50%"}}>

                <div className='col-sm-12' style={{textAlign:"center"}}>
                    <h2>Sign In</h2>
                </div>
                <div className='col-sm-12'>
                    <form>
                        <div>
                            <label>Email</label>
                            <input className='form-control' type="email" value={email} onChange={emailHandler}></input>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <label>Password</label>
                            <input className='form-control' type="password"  value={password} onChange={passwordHandler}></input>
                        </div>
                        <div className='mt-5'>
                           <button className='btn btn-block' onClick={submitHandler}>Signin</button> 
                        </div>
                    </form>
                </div>
                <div className='text-right' >
                    <hr style={{backgroundColor:"white",marginTop:"40px"}}></hr>
                    <div className='d-flex' style={{justifyContent:"space-between"}}>
                    <p>Not a member?<Link to="/"><span style={{color:"#30c4ff"}}> Sign Up </span></Link></p>
                    <p>Forgot password</p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
