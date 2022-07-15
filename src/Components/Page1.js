import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL} from '../config';
import Logout from './Logout';
import welcome from '../images/welcompage.png'

export default function Page1() {

  const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

    const [data1, setdata] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/alldata/`, config).then((res) => {
          setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
      // console.log(data1)

    function getID(e){
      localStorage.setItem("id", parseInt(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText))
    }

  return (
    <>
        <div className=' mt-5 mr-5 text-end'>
       <Logout/>
       </div>
    {
      data1.length===0?
      <div style={{textAlign:"center"}}>
        <h1 className='textcolor'>Welcome to Resume Builder</h1>
        <p style={{fontSize:"17px"}}>Fill in the blanks, choose a template,and download your  <br/>  resume instantly.</p>
        <img src={welcome} alt=""  style={{height:"360px",marginTop:"30px"}}/>
      </div>
      
      :
      
    <div>
    <div className="container text-center" style={{display:"flex",justifyContent:"center"}}>
        <div className='row'>
            <div className='col-sm-12'>
        <h1 className='textcolor' style={{color:"black"}}>Your Previous Filled data</h1>


            <table border="2" className='tab'>
                <thead>
                    <tr className='head'>
                        <th>Name</th>
                        <th>id</th>
                        <th>profession</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>country</th>
                        <th>Address</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data1.map((item,key)=>
                    {
                      return (
                        <>
                       <tr style={{border:"1px solid black"}} id="datas">
                       <td key={key}>{item.first_name} {item.last_name}</td>
                       <td key={key}>{item.id}</td>
                       <td key={key}>{item.profession}</td>
                       <td key={key}>{item.email}</td>
                       <td key={key}>{item.phone_number}</td>
                       <td key={key}>{item.country}</td>
                       <td key={key}>{item.city},{item.pin_code}</td>
                       <div style={{display:"flex",marginTop:"25px"}}>
                        <Link to="/all_resume"><button style={{padding:"2px"}} onClick={getID}>Download</button></Link> 
                       </div>

                       </tr>
                       
                       </>
                       )
                    })
                  }
                   
                    

                </tbody>
                 
            </table>
            </div>

        </div>

        </div>

    </div>
    }

    <div style={{display:"flex",justifyContent:"center",margin:"30px 50px 30px 0px"}}>
       <Link to="/user"><button className='dropbtn2' >Create New Resume</button></Link> 
    </div>
    
    </>
  )
}
