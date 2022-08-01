import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../config'

export default function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function emailHandler(e) {
        setEmail(e.target.value)
    }
    function passwordHandler(e) {
        setPassword(e.target.value)
    }


    function submitHandler(e) {
        e.preventDefault();
        let data = new FormData()

        data.append('email', email)
        data.append('password', password)


        axios.post(`${BASE_URL}/api/login/`, data)
            // axios.post(`${ngrok}/api/login/`,data)
            .then((res) => {
                window.localStorage.setItem('token', res.data.access)
                // window.location.href="/user"
                window.location = "/page1";
            }).catch((err) => {
                console.log(err)
                alert("Your email and password do not match,please try agian.")
            })
    }
    return (
        <div className='banner'>
            <div style={{background:"#00000070",height:"100vh"}}>

            <div className='container signin'>
                <div className='row signinrow'>
                    <div className='col-sm-12 col-lg-6 col-md-6 p-0 signinimg'>
                        <div style={{ background: "rgba(87, 89, 255, 0.51)", height: "100%", padding: "0px 30px", color: "white", alignItems: "center", display: "flex" }}>
                            <div>
                                <h1 style={{ fontFamily: 'sans-serif', fontWeight: 700, lineHeight: 1.5, color: '#ffd69a',fontSize:"50px" }}>Welcome Back !</h1>
                                <p style={{ fontFamily: 'sans-serif', fontSize: '30px', fontWeight: 600, color: '#ffd69a' }}>Login To Continue</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-6 col-md-6 signindata p-0'>
                        <form className='signin_containt'>
                            <div>
                                <h4>SIGNIN</h4>
                            </div>
                            <div>
                                <label>Email</label>
                                <input className='form-control' type="email" value={email} onChange={emailHandler}></input>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <label>Password</label>
                                <input className='form-control' type="password" value={password} onChange={passwordHandler}></input>
                            </div>
                            <div className='mt-5 signbtn' style={{}}>
                                <button className='btn btn-outline-dark' onClick={submitHandler}>Signin</button>
                            </div>
                            <div className="mt-5" >
                                <div className='row' style={{ justifyContent: "space-between" }}>
                                    <div className='col-sm-12 col-lg-7 col-md-7'>
                                    <p>Not a Member?<Link to="/signup" style={{ textDecoration: "none" }}><span style={{ color: "#743e31" }}> Sign Up </span></Link></p>
                                    </div>
                                    <div className='col-sm-12 col-lg-5 col-md-5'>
                                    <Link to="/forgot_password" style={{ textDecoration: "none", color: "black" }}> <p>Forgot password</p></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
