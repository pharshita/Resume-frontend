import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const[name,setName]=useState("")
    
    const[lname,setlName]=useState("")
    const[num,setnum]=useState("")
    const[pass1,setPass1]=useState("")
    const[pass2,setPass2]=useState("")
    const[email,setEmail]=useState("")
    const[username,setUsername]=useState("")
    const[clear,setclear]=useState({
        name:false,
        lname:false,
        num:false,
        // pass1:false,
        pass2:false

    })

    function nameHandler(e){
        setName(e.target.value)
    }
    // console.log(name)
    function lnameHandler(e){
        setlName(e.target.value)
    }
    function userHandler(e){
        setUsername(e.target.value)
    }

    function emailhandler(e){
        setEmail(e.target.value)
    }
    function numHandler(e){
        setnum(e.target.value)
    }
    // console.log(num)
    function pass1Handler(e){
        setPass1(e.target.value)
    }
    function pass2Handler(e){
        setPass2(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault();
        let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        for(let i=0;i<=nums.length;i++){
            if(name.includes(nums[i])){
                document.getElementById("name").style.display="block";
                document.getElementById("name").style.color="red";
                
                break
            }else if(name==""){
                document.getElementById("name").style.display="block";
                document.getElementById("name").style.color="red";
            }
            else{
                document.getElementById("name").style.display="none";
              setclear(clear.name=true)

            }
        }
        for(let i=0;i<=nums.length;i++){
            if(lname.includes(nums[i])){
                document.getElementById("lname").style.display="block";
                document.getElementById("lname").style.color="red";
                break
            }else if(lname==""){
                document.getElementById("lname").style.display="block";
                document.getElementById("lname").style.color="red";
            }
            else{
                document.getElementById("lname").style.display="none";
                setclear(clear.lname= true)
                
            }
        }
       
        let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-{}|"
        for (let i = 0; i <= nums.length; i++) {
            if (num.includes(alpha[i])) {
                document.getElementById("number").style = "visibility:hidden";
            }
            
            else {
                document.getElementById("number").style = "visibility:show";
                document.getElementById("number").innerHTML = "put only numbers";
                document.getElementById("number").style = "color:red";
                
            }
        }
        for (let i = 0; i <= alpha.length; i++) {
            if (num.includes(alpha[i])) {
                document.getElementById("number").style = "visibility:show";
                document.getElementById("number").innerHTML = "put only numbers";
                document.getElementById("number").style = "color:red";
                break
            }
            
            else {
                document.getElementById("number").style = "visibility:hidden";
                setclear(clear.num=true)

            }
        }
       
       

        if(pass1!==pass2){
            document.getElementById("pass2").style.display="block";
            document.getElementById("pass2").style.color="red";
        }else{
            document.getElementById("pass2").style.display="none";
            setclear(clear.pass2=true)
            debugger

        }

        // if(pass1==""){
        //     document.getElementById("pass1").style.display="block";
        //     document.getElementById("pass1").style.color="red";
        // }else{
        //     document.getElementById("pass1").style.display="none";
        //     debugger

        //     setclear(clear.pass1= true)

        // }

        if((clear.name==true)&&(clear.lname==true)&&(clear.num==true)&&(clear.pass2==true)){

            let data = new FormData()
    
            data.append('first_name',name)
            data.append('last_name',lname)
            data.append('username',username)
            data.append('email',email)
            data.append('mobile_no',num)
            data.append('password',pass2)
           
    
            axios.post('http://127.0.0.1:8000/api/registers/', data)
            .then((res) => {
                debugger
            window.localStorage.setItem('id', JSON.stringify(res.data.id));
            window.location.href = "/signin";
    
            }).catch((err) => {
                console.log(err)
            })
        }
        else{
            console.log("error")
        }

        
        

    }
  return (
    <div className='signupbg'>
        <div className='container'>
            <div className='row signupform' >
                <div className='signup_containt' style={{width:"60%",marginTop:"40px"}} >

                <div className='col-sm-12' style={{textAlign:"center"}}>
                    <h2>Sign Up</h2>
                </div>
                <div className='col-sm-12 mt-5'>
                    <form>
                        <div className='d-flex ' style={{justifyContent:"space-between"}}>

                        <div>
                            <label>Firsname</label>
                            <input className='form-control' type="text" style={{width:"330px"}} value={name} onChange={nameHandler}></input>
                             <p style={{display:"none",margin:"5px 10px"}} id="name">please enter valid name</p>

                        </div>
                        <div >
                            <label>lastname</label>
                            <input className='form-control' type="text" style={{width:"330px"}} value={lname} onChange={lnameHandler}></input>
                            <p style={{display:"none",margin:"5px 10px"}} id="lname">please enter valid name</p>
                     
                        </div>
                        </div>
                        <div style={{marginTop:"20px"}} >
                            <label>Username</label>
                            <input className='form-control' type="text" value={username} onChange={userHandler}></input>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <label>Email</label>
                            <input className='form-control' type="email" value={email} onChange={emailhandler}></input>
                        </div>

                        <div style={{marginTop:"20px"}}>
                            <label>Mobile number</label>
                            <input className='form-control' value={num} onChange={numHandler}></input>
                            <p style={{display:"none",margin:"5px 10px"}} id="number"></p>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <label>Password</label>
                            <input className='form-control' type="password" value={pass1} onChange={pass1Handler}></input>
                            <p style={{display:"none",margin:"5px 10px"}} id="pass1">please enter valid password</p>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <label>Conform Password</label>
                            <input className='form-control' type="password" value={pass2} onChange={pass2Handler}></input>
                            <p style={{display:"none",margin:"5px 10px"}} id="pass2">password not match</p>
                        </div>
                        <div className='mt-5'>
                        <button className='btn btn-block' onClick={submitHandler}>Signup</button>
                        </div>
                    </form>
                </div>
                <div className='text-center' >
                    <hr style={{backgroundColor:"white",marginTop:"40px"}}></hr>
                    <p>Already Have An Account?<Link to="/signin"><span style={{color:"#0b3d51"}}> Sign in </span></Link></p>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
