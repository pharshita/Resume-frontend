import React, { useEffect, useState, useRef } from 'react'
import ReactToPrint from 'react-to-print';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';
import { Chip } from '@mui/material';
import user from '../images/user.jpeg'
import { BASE_URL } from '../config';

export default function Resume8() {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

    const componentRef = useRef();

    const [data1, setdata] = useState([])
    useEffect(() => {
        const id = window.localStorage.getItem('id')
        // console.log(id)
          
        let ngrok="https://4d4f-2405-201-300b-7072-7568-f976-cbbf-7a4d.in.ngrok.io"
        let url="http://127.0.0.1:8000"
        // http://127.0.0.1:8000/api/resume/1/
        axios.get(` ${BASE_URL}/api/resume/${id}/`, config).then((res) => {
          // axios.get(` ${ngrok}/api/resume/${id}/`, config).then((res) => {

            setdata([res.data])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    let getdata = JSON.parse(window.localStorage.getItem('data'))
    let getdata2 = JSON.parse(window.localStorage.getItem('data2'))
    let getdata3 = JSON.parse(window.localStorage.getItem('data3'))
    let getdata4 = JSON.parse(window.localStorage.getItem('data4'))
    let getdata5 = JSON.parse(window.localStorage.getItem('data5'))
    return (
        <div>
            <div className='container resume4' ref={componentRef} style={{ width: "70%", padding: "0px" }}>
                <div className='row'>
                    {
                        data1.map((items) => {
                            let image = items.profile_image

                            return (
                                <>
                                    <div className='d-flex'>
                                        <div style={{ backgroundColor: "#a5c4c7", width: "50%", position: "relative", padding: "30px 0px" }}>
                                            <div style={{ display: "flex", justifyContent: "end", marginRight: "-100px" }}>
                                                <h5 style={{ marginTop: "150px", paddingBottom: "10px", marginRight: "170px", fontWeight: "bold" }}>Profile</h5>
                                                {
                                                    items.profile_image === null ? <img src={user} alt='no image' style={{ height: "214px", width: "36%", border: "4px solid #3e96a4", borderRadius: "50%" }}></img> : <img src={` http://127.0.0.1:8000/${image}`} style={{ height: "210px", width: "35%", border: "4px solid #3e96a4", borderRadius: "50%", marginBottom: "-170px" }}></img>

                                                }
                                            </div>
                                            <div style={{ width: "150%", backgroundColor: "white", display: "flex", marginLeft: "130px", marginTop: "-10px" }}>
                                                <div style={{ width: "60%", padding: "50px", fontSize: "12px" }}>
                                                    <p >{items.profile_summary}</p>
                                                </div>
                                                <div style={{ width: "40%", padding: "50px" }}>
                                                    <h4>Contact</h4>
                                                    <p>{items.city} {items.country} {items.pin_code}</p>
                                                    <p>{items.phone_number}</p>
                                                    <p>{items.email}</p>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "end" }}>
                                                <div>

                                                    <h5 style={{ marginTop: "30px", marginRight: "250px", fontWeight: "bold" }}>Education</h5>
                                                    <h5 style={{ fontSize: "15px", marginTop: "30px", fontWeight: "bold" }}>{items.Education[0].school_name},{items.Education[0].school_location}</h5>
                                                    <p style={{ color: "white" }}>({items.Education[0].start_date} to {items.Education[0].end_date})</p>
                                                    <p>{items.Education[0].degree}</p>
                                                    <p>{items.Education[0].field_of_study}</p>
                                                    {
                                                        items.Education[1] === undefined ? "" :
                                                            <>
                                                                <h5 style={{ fontSize: "15px", marginTop: "30px", fontWeight: "bold" }}>{items.Education[1].school_name},{items.Education[1].school_location}</h5>
                                                                <p style={{ color: "white" }}>({items.Education[1].start_date} to {items.Education[1].end_date})</p>
                                                                <p>{items.Education[1].degree}</p>
                                                                <p>{items.Education[1].field_of_study}</p>
                                                            </>

                                                    }
                                                    {
                                                        items.Education[2] === undefined ? "" :
                                                            <>
                                                                <h5 style={{ fontSize: "15px", marginTop: "30px", fontWeight: "bold" }}>{items.Education[2].school_name},{items.Education[2].school_location}</h5>
                                                                <p style={{ color: "white" }}>({items.Education[2].start_date} to {items.Education[2].end_date})</p>
                                                                <p>{items.Education[2].degree}</p>
                                                                <p>{items.Education[2].field_of_study}</p>
                                                            </>

                                                    }
                                                    {
                                                        items.Education[3] === undefined ? "" :
                                                            <>
                                                                <h5 style={{ fontSize: "15px", marginTop: "30px", fontWeight: "bold" }}>{items.Education[3].school_name},{items.Education[3].school_location}</h5>
                                                                <p style={{ color: "white" }}>({items.Education[3].start_date} to {items.Education[3].end_date})</p>
                                                                <p>{items.Education[3].degree}</p>
                                                                <p>{items.Education[3].field_of_study}</p>
                                                            </>

                                                    }
                                                    {
                                                        items.Education[4] === undefined ? "" :
                                                            <>
                                                                <h5 style={{ fontSize: "15px", marginTop: "30px", fontWeight: "bold" }}>{items.Education[4].school_name},{items.Education[4].school_location}</h5>
                                                                <p style={{ color: "white" }}>({items.Education[4].start_date} to {items.Education[4].end_date})</p>
                                                                <p>{items.Education[4].degree}</p>
                                                                <p>{items.Education[4].field_of_study}</p>
                                                            </>

                                                    }
                                                    {
                                                        items.Education[5] === undefined ? "" :
                                                            <>
                                                                <h5 style={{ fontSize: "15px", marginTop: "30px", fontWeight: "bold" }}>{items.Education[5].school_name},{items.Education[5].school_location}</h5>
                                                                <p style={{ color: "white" }}>({items.Education[5].start_date} to {items.Education[5].end_date})</p>
                                                                <p>{items.Education[5].degree}</p>
                                                                <p>{items.Education[5].field_of_study}</p>
                                                            </>

                                                    }
                                                    <div className='mt-5' style={{ backgroundColor: "white", marginLeft: "-100px", borderTopLeftRadius: "100px", borderBottomLeftRadius: "100px", paddingBottom: "30px" }}>
                                                        <h5 style={{ paddingTop: "30px", marginLeft: "95px", fontWeight: "bold" }}>Skills</h5>
                                                        <div className='d-flex ml-5'>

                                                            <div className='mt-3'>

                                                                <Chip label={items.skills[0]} sx={{ padding: "10px 10px" }} />
                                                            </div>
                                                            {
                                                                items.skills[1] === undefined ? "" :
                                                                    <div className='ml-3 mt-3'>
                                                                        <Chip label={items.skills[1]} sx={{ padding: "10px 10px" }} />
                                                                    </div>
                                                            }
                                                            {
                                                                items.skills[2] === undefined ? "" :
                                                                    <div className='ml-3  mt-3'>
                                                                        <Chip label={items.skills[2]} sx={{ padding: "10px 10px" }} />
                                                                    </div>
                                                            }
                                                            {
                                                                items.skills[3] === undefined ? "" :
                                                                    <div className='ml-3  mt-3'>
                                                                        <Chip label={items.skills[3]} sx={{ padding: "10px 10px" }} />
                                                                    </div>
                                                            }

                                                        </div>
                                                        <div className='d-flex ml-5'>
                                                            {
                                                                items.skills[4] === undefined ? "" :
                                                                    <div className='mt-3'>
                                                                        <Chip label={items.skills[4]} sx={{ padding: "10px 10px" }} />
                                                                    </div>
                                                            }

                                                            {
                                                                items.skills[5] === undefined ? "" :
                                                                    <div className='ml-3 mt-3'>
                                                                        <Chip label={items.skills[5]} sx={{ padding: "10px 10px" }} />
                                                                    </div>
                                                            }
                                                            {
                                                                items.skills[6] === undefined ? "" :
                                                                    <div className='ml-3 mt-3'>
                                                                        <Chip label={items.skills[6]} sx={{ padding: "10px 10px" }} />
                                                                    </div>
                                                            }
                                                            {
                                                                items.skills[7] === undefined ? "" :
                                                                    <div className='ml-3 mt-3'>
                                                                        <Chip label={items.skills[7]} sx={{ padding: "10px 10px" }} />
                                                                    </div>
                                                            }
                                                            {
                                                                items.skills[8] === undefined ? "" :
                                                                    <div className='ml-3 mt-3'>
                                                                        <Chip label={items.skills[8]} sx={{ padding: "10px 10px" }} />
                                                                    </div>
                                                            }




                                                        </div>
                                                    </div>

                                                </div>


                                            </div>

                                        </div>
                                        <div style={{ backgroundColor: "#e19f87", width: "50%", paddingLeft: "123px", paddingTop: "79px", paddingRight: "30px" }}>
                                            <h2>{items.first_name} {items.last_name}</h2>
                                            <h5>{items.profession}</h5>
                                            <div style={{ marginTop: "370px", marginLeft: "-40px" }}>
                                                <h5 style={{ marginTop: "174px", marginRight: "170px", fontWeight: "bold" }}>Work Experience</h5>
                                                <p style={{ color: "white", marginLeft: "-50px", marginTop: "20px" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</p>
                                                <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[0].job_title}</h5>
                                                <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                <h5>{items.Experience[0].project_name}</h5>

                                                {/* <p>{items.Experience[0].job_discription}</p> */}
                                                {
                                                    getdata.map((item, key) => {
                                                        return (
                                                            <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item.slice(1, item.length - 1)}</p>
                                                        )
                                                    })
                                                }
                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>

                                                {
                                                    items.Experience[1] === undefined ? "" :
                                                        <>
                                                            <p style={{ color: "white", marginLeft: "-50px", marginTop: "20px" }}>{items.Experience[1].start_date} to {items.Experience[1].end_date}</p>
                                                            <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[1].job_title}</h5>
                                                            <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[1].Company_name} {items.Experience[1].city},{items.Experience[1].country}</h5>
                                                            <h5>{items.Experience[1].project_name}</h5>

                                                            {/* <p>{items.Experience[1].job_discription}</p> */}
                                                            {
                                                                getdata2.map((item1, key) => {
                                                                    return (
                                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item1.slice(1, item1.length - 1)}</p>
                                                                    )
                                                                })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[1].project_urls} target="_blank"> {items.Experience[1].project_urls} </a></p>
                                                        </>

                                                }
                                                {
                                                    items.Experience[2] === undefined ? "" :
                                                        <>
                                                            <p style={{ color: "white", marginLeft: "-50px", marginTop: "20px" }}>{items.Experience[2].start_date} to {items.Experience[2].end_date}</p>
                                                            <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[2].job_title}</h5>
                                                            <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[2].Company_name} {items.Experience[2].city},{items.Experience[2].country}</h5>
                                                            <h5>{items.Experience[2].project_name}</h5>

                                                            {/* <p>{items.Experience[2].job_discription}</p> */}
                                                            {
                                                                getdata3.map((item2, key) => {
                                                                    return (
                                                                        <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item2.slice(1, item2.length - 1)}</p>
                                                                    )
                                                                })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[2].project_urls} target="_blank"> {items.Experience[2].project_urls} </a></p>
                                                        </>

                                                }
                                                {
                                                    items.Experience[3] === undefined ? "" :
                                                        <>
                                                            <p style={{ color: "white", marginLeft: "-50px", marginTop: "20px" }}>{items.Experience[3].start_date} to {items.Experience[3].end_date}</p>
                                                            <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[1].job_title}</h5>
                                                            <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>
                                                            <h5>{items.Experience[3].project_name}</h5>

                                                            {/* <p>{items.Experience[3].job_discription}</p> */}

                                                            {
                                                                getdata4 === null ? " " :
                                                                    getdata4.map((item3, key) => {
                                                                        return (
                                                                            <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item3.slice(1, item3.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }

                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>
                                                        </>

                                                }
                                                {
                                                    items.Experience[3] === undefined ? "" :
                                                        <>
                                                            <p style={{ color: "white", marginLeft: "-50px", marginTop: "20px" }}>{items.Experience[3].start_date} to {items.Experience[3].end_date}</p>
                                                            <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[1].job_title}</h5>
                                                            <h5 style={{ fontSize: "15px", fontWeight: "bold" }}>{items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>

                                                            <h5>{items.Experience[4].project_name}</h5>

                                                            {/* <p>{items.Experience[4].job_discription}</p> */}

                                                            {
                                                                getdata5 === null ? " " :
                                                                    getdata5.map((item4, key) => {
                                                                        return (
                                                                            <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item4.slice(1, item4.length - 1)}</p>
                                                                        )
                                                                    })
                                                            }
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>
                                                        </>

                                                }
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "50px 0px" }}>
                <ReactToPrint
                    trigger={() => <button style={{ padding: "10px 10px", backgroundColor: "#243572", color: "white", border: "none" }}><CloudDownloadIcon /> Download</button>}
                    content={() => componentRef.current}
                />
            </div>
        </div>
    )
}
