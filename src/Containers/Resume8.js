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
import { display } from '@mui/system';

export default function Resume8() {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

    const componentRef = useRef();

    const [data1, setdata] = useState([])
    useEffect(() => {
        const id = window.localStorage.getItem('id')
        // console.log(id)

        let ngrok = "https://4d4f-2405-201-300b-7072-7568-f976-cbbf-7a4d.in.ngrok.io"
        let url = "http://127.0.0.1:8000"
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
    let getdata6 = JSON.parse(window.localStorage.getItem('data6'))
    let getdata7 = JSON.parse(window.localStorage.getItem('data7'))
    let getdata8 = JSON.parse(window.localStorage.getItem('data8'))
    return (
        <div>
            <div className='container resume8' ref={componentRef} style={{ width: "70%", padding: "0px" }}>
                <div className='row'>
                    {
                        data1.map((items) => {

                            return (
                                <>
                                    <div className='mt-5' style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div>

                                            <h4>{items.first_name} {items.last_name}</h4>
                                            <h5>{items.profession}</h5>
                                            <p>{items.email}</p>
                                        </div>
                                        <div className='pr-5'>
                                            <p><strong>location:-</strong>{items.city}, {items.country} {items.pin_code}</p>
                                            <p><strong>Contact:-</strong>{items.phone_number}</p>

                                        </div>


                                    </div>
                                    <div>
                                        <div style={{ backgroundColor: "#958e8e75", padding: "5px 10px", textTransform: "uppercase", marginTop: "10px" }}>
                                            <h5>Profile  Summary</h5>
                                        </div>
                                        <div style={{ padding: "10px 10px" }}>
                                            <p>{items.profile_summary}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ backgroundColor: "#958e8e75", padding: "5px 10px", textTransform: "uppercase", marginTop: "10px" }}>
                                            <h5>Skills</h5>
                                        </div>
                                        <ul className='row pl-5 pt-3'>
                                            <div className='col-sm-6'>

                                                {
                                                    items.skills[0] === undefined ? "" : <li>{items.skills[0]}</li>
                                                }
                                                {
                                                    items.skills[1] === undefined ? "" : <li>{items.skills[1]}</li>
                                                }
                                                {
                                                    items.skills[2] === undefined ? "" : <li>{items.skills[2]}</li>
                                                }
                                                {
                                                    items.skills[3] === undefined ? "" : <li>{items.skills[3]}</li>
                                                }
                                                {
                                                    items.skills[4] === undefined ? "" : <li>{items.skills[4]}</li>
                                                }
                                                {
                                                    items.skills[5] === undefined ? "" : <li>{items.skills[5]}</li>
                                                }
                                                {
                                                    items.skills[6] === undefined ? "" : <li>{items.skills[6]}</li>
                                                }
                                            </div>
                                            <div className='col-sm-6'>
                                                {
                                                    items.skills[7] === undefined ? "" : <li>{items.skills[7]}</li>
                                                }
                                                {
                                                    items.skills[8] === undefined ? "" : <li>{items.skills[8]}</li>
                                                }
                                                {
                                                    items.skills[9] === undefined ? "" : <li>{items.skills[9]}</li>
                                                }
                                                {
                                                    items.skills[10] === undefined ? "" : <li>{items.skills[10]}</li>
                                                }
                                                {
                                                    items.skills[11] === undefined ? "" : <li>{items.skills[11]}</li>
                                                }
                                                {
                                                    items.skills[12] === undefined ? "" : <li>{items.skills[12]}</li>
                                                }
                                                {
                                                    items.skills[13] === undefined ? "" : <li>{items.skills[13]}</li>
                                                }
                                            </div>
                                        </ul>
                                    </div>
                                    <div>
                                        <div style={{ backgroundColor: "#958e8e75", padding: "5px 10px", textTransform: "uppercase", marginTop: "10px" }}>
                                            <h5>Education</h5>
                                        </div>
                                        <div style={{ marginTop: "10px" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px" }}>
                                                <div>
                                                    <h5>Degree</h5>
                                                </div>
                                                <div>
                                                    <h5>Year Of Passing</h5>

                                                </div>

                                            </div>
                                            <hr></hr>
                                            {
                                                items.Education[0] === undefined ? "" :

                                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px" }}>
                                                        <div>
                                                            <h4>{items.Education[0].degree}</h4>
                                                            <p>{items.Education[0].field_of_study}</p>
                                                            <p>{items.Education[0].school_name},{items.Education[0].school_location}</p>
                                                        </div>
                                                        <div>
                                                            <p >{items.Education[0].start_date} to {items.Education[0].end_date}</p>


                                                        </div>

                                                    </div>
                                            }
                                            {
                                                items.Education[1] === undefined ? "" :
                                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px" }}>
                                                        <div>
                                                            <h4>{items.Education[1].degree}</h4>
                                                            <p>{items.Education[1].field_of_study}</p>
                                                            <p>{items.Education[1].school_name},{items.Education[1].school_location}</p>
                                                        </div>
                                                        <div>
                                                            <p >{items.Education[1].start_date} to {items.Education[1].end_date}</p>


                                                        </div>

                                                    </div>

                                            }
                                            {
                                                items.Education[2] === undefined ? "" :
                                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px" }}>
                                                        <div>
                                                            <h4>{items.Education[2].degree}</h4>
                                                            <p>{items.Education[2].field_of_study}</p>
                                                            <p>{items.Education[2].school_name},{items.Education[2].school_location}</p>
                                                        </div>
                                                        <div>
                                                            <p >{items.Education[2].start_date} to {items.Education[2].end_date}</p>


                                                        </div>

                                                    </div>

                                            }
                                            {
                                                items.Education[3] === undefined ? "" :
                                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px" }}>
                                                        <div>
                                                            <h4>{items.Education[3].degree}</h4>
                                                            <p>{items.Education[3].field_of_study}</p>
                                                            <p>{items.Education[3].school_name},{items.Education[3].school_location}</p>
                                                        </div>
                                                        <div>
                                                            <p >{items.Education[3].start_date} to {items.Education[3].end_date}</p>


                                                        </div>

                                                    </div>

                                            }
                                            {
                                                items.Education[4] === undefined ? "" :
                                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px" }}>
                                                        <div>
                                                            <h4>{items.Education[4].degree}</h4>
                                                            <p>{items.Education[4].field_of_study}</p>
                                                            <p>{items.Education[4].school_name},{items.Education[4].school_location}</p>
                                                        </div>
                                                        <div>
                                                            <p >{items.Education[4].start_date} to {items.Education[4].end_date}</p>


                                                        </div>

                                                    </div>

                                            }
                                            {
                                                items.Education[5] === undefined ? "" :
                                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px" }}>
                                                        <div>
                                                            <h4>{items.Education[5].degree}</h4>
                                                            <p>{items.Education[5].field_of_study}</p>
                                                            <p>{items.Education[5].school_name},{items.Education[5].school_location}</p>
                                                        </div>
                                                        <div>
                                                            <p >{items.Education[5].start_date} to {items.Education[5].end_date}</p>


                                                        </div>

                                                    </div>

                                            }

                                        </div>
                                    </div>
                                    <div>
                                        {
                                            items.Experience[0] === undefined ? "" :
                                                <>
                                                    <div style={{ backgroundColor: "#958e8e75", padding: "5px 10px", textTransform: "uppercase", marginTop: "10px" }}>
                                                        <h5>Experience</h5>
                                                    </div>
                                                    <div style={{ padding: "10px 50px" }}>

                                                        <div>

                                                            <div className='row pt-4'>
                                                                <div className='col-sm-6'>

                                                                    <h5 style={{ textTransform: "capitalize" }}>{items.Experience[0].job_title} in {items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    <p style={{ textAlign: "end", color: "black" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5>{items.Experience[0].project_name}</h5>

                                                            {/* <p>{items.Experience[0].job_discription}</p> */}
                                                            {
                                                                getdata === null ? <p>{items.Experience[0].job_discription}</p> :
                                                                    getdata.map((item, key) => {
                                                                        return (
                                                                            <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item.slice(1, item.length - 1)}</p>
                                                                        )
                                                                    })
                                                                // getEx()
                                                            }
                                                            {
                                                                items.Experience[0].project_urls === '' ? "" :
                                                                    <p><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>
                                                            }
                                                        </div>

                                                        {
                                                            items.Experience[1] === undefined ? "" :
                                                                <div className='pl-3'>
                                                                    <div className='row pt-4'>
                                                                        <div className='col-sm-6'>

                                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[1].job_title} in {items.Experience[1].Company_name} {items.Experience[1].city},{items.Experience[1].country}</h5>
                                                                        </div>
                                                                        <div className='col-sm-6'>
                                                                            <p style={{ textAlign: "end", color: "black" }}>{items.Experience[1].start_date} to {items.Experience[1].end_date}</p>

                                                                        </div>
                                                                    </div>
                                                                    <h5>{items.Experience[1].project_name}</h5>

                                                                    {/* <p>{items.Experience[1].job_discription}</p> */}
                                                                    {
                                                                        getdata2 === null ? <p>{items.Experience[1].job_discription}</p> :
                                                                            getdata2.map((item1, key) => {
                                                                                return (
                                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item1.slice(1, item1.length - 1)}</p>
                                                                                )
                                                                            })
                                                                    }

                                                                    {
                                                                        items.Experience[1].project_urls === '' ? "" :
                                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[1].project_urls} target="_blank"> {items.Experience[1].project_urls} </a></p>
                                                                    }
                                                                </div>
                                                        }
                                                        {
                                                            items.Experience[2] === undefined ? "" :
                                                                <div className='pl-3'>
                                                                    <div className='row pt-4'>
                                                                        <div className='col-sm-6'>

                                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[2].job_title} in {items.Experience[2].Company_name} {items.Experience[2].city},{items.Experience[2].country}</h5>
                                                                        </div>
                                                                        <div className='col-sm-6'>
                                                                            <p style={{ textAlign: "end", color: "black" }}>{items.Experience[2].start_date} to {items.Experience[2].end_date}</p>

                                                                        </div>
                                                                    </div>
                                                                    <h5>{items.Experience[2].project_name}</h5>

                                                                    {/* <p>{items.Experience[2].job_discription}</p> */}
                                                                    {
                                                                        getdata3 === null ?  <p>{items.Experience[2].job_discription}</p> :
                                                                        getdata3.map((item2, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item2.slice(1, item2.length - 1)}</p>
                                                                            )
                                                                        })
                                                                    }
                                                                    <p><strong>Project_urls:-</strong> <a href={items.Experience[2].project_urls} target="_blank"> {items.Experience[2].project_urls} </a></p>
                                                                </div>
                                                        }
                                                        {
                                                            items.Experience[3] === undefined ? "" :
                                                                <div className='pl-3'>
                                                                    <div className='row pt-4'>
                                                                        <div className='col-sm-6'>

                                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[3].job_title} in {items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>
                                                                        </div>
                                                                        <div className='col-sm-6'>
                                                                            <p style={{ textAlign: "end", color: "black" }}>{items.Experience[3].start_date} to {items.Experience[3].end_date}</p>

                                                                        </div>
                                                                    </div>
                                                                    <h5>{items.Experience[3].project_name}</h5>

                                                                    {/* <p>{items.Experience[3].job_discription}</p> */}

                                                                    {
                                                                        getdata4 === null ?  <p>{items.Experience[3].job_discription}</p> :
                                                                            getdata4.map((item3, key) => {
                                                                                return (
                                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item3.slice(1, item3.length - 1)}</p>
                                                                                )
                                                                            })
                                                                    }
                                                                    <p><strong>Project_urls:-</strong> <a href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>
                                                                </div>
                                                        }
                                                        {
                                                            items.Experience[4] === undefined ? "" :
                                                                <div className='pl-3'>
                                                                    <div className='row pt-4'>
                                                                        <div className='col-sm-6'>

                                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[4].job_title} in {items.Experience[4].Company_name} {items.Experience[4].city},{items.Experience[4].country}</h5>
                                                                        </div>
                                                                        <div className='col-sm-6'>
                                                                            <p style={{ textAlign: "end", color: "black" }}>{items.Experience[4].start_date} to {items.Experience[4].end_date}</p>

                                                                        </div>
                                                                    </div>
                                                                    <h5>{items.Experience[4].project_name}</h5>
                                                                    {/* <p>{items.Experience[4].job_discription}</p> */}
                                                                    {
                                                                        getdata5 === null ? <p>{items.Experience[4].job_discription}</p> :
                                                                            getdata5.map((item4, key) => {
                                                                                return (
                                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item4.slice(1, item4.length - 1)}</p>
                                                                                )
                                                                            })
                                                                    }
                                                                    <p><strong>Project_urls:-</strong> <a href={items.Experience[4].project_urls} target="_blank"> {items.Experience[4].project_urls} </a></p>
                                                                </div>
                                                        }
                                                        {
                                                            items.Experience[5] === undefined ? "" :
                                                                <div className='pl-3'>
                                                                    <div className='row pt-5'>
                                                                        <div className='col-sm-6'>

                                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[5].job_title} in {items.Experience[5].Company_name} {items.Experience[5].city},{items.Experience[5].country}</h5>
                                                                        </div>
                                                                        <div className='col-sm-6'>
                                                                            <p style={{ textAlign: "end", color: "black" }}>{items.Experience[5].start_date} to {items.Experience[5].end_date}</p>

                                                                        </div>
                                                                    </div>
                                                                    <h5>{items.Experience[5].project_name}</h5>

                                                                    {/* <p>{items.Experience[5].job_discription}</p> */}
                                                                    {
                                                                        getdata6 === null ? <p>{items.Experience[5].job_discription}</p> :
                                                                            getdata6.map((item5, key) => {
                                                                                return (
                                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item5.slice(1, item5.length - 1)}</p>
                                                                                )
                                                                            })
                                                                    }
                                                                    <p><strong>Project_urls:-</strong> <a href={items.Experience[5].project_urls} target="_blank"> {items.Experience[5].project_urls} </a></p>
                                                                </div>
                                                        }
                                                        {
                                                            items.Experience[6] === undefined ? "" :
                                                                <div className='pl-3'>
                                                                    <div className='row pt-5'>
                                                                        <div className='col-sm-6'>

                                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[6].job_title} in {items.Experience[6].Company_name} {items.Experience[6].city},{items.Experience[6].country}</h5>
                                                                        </div>
                                                                        <div className='col-sm-6'>
                                                                            <p style={{ textAlign: "end", color: "black" }}>{items.Experience[6].start_date} to {items.Experience[6].end_date}</p>

                                                                        </div>
                                                                    </div>
                                                                    <h5>{items.Experience[6].project_name}</h5>

                                                                    {/* <p>{items.Experience[6].job_discription}</p> */}

                                                                    {
                                                                        getdata7 === null ? <p>{items.Experience[6].job_discription}</p> :
                                                                            getdata7.map((item6, key) => {
                                                                                return (
                                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item6.slice(1, item6.length - 1)}</p>
                                                                                )
                                                                            })
                                                                    }
                                                                    <p><strong>Project_urls:-</strong> <a href={items.Experience[6].project_urls} target="_blank"> {items.Experience[6].project_urls} </a></p>
                                                                </div>
                                                        }
                                                        {
                                                            items.Experience[7] === undefined ? "" :
                                                                <div className='pl-3'>
                                                                    <div className='row pt-5'>
                                                                        <div className='col-sm-6'>

                                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[7].job_title} in {items.Experience[7].Company_name} {items.Experience[7].city},{items.Experience[7].country}</h5>
                                                                        </div>
                                                                        <div className='col-sm-6'>
                                                                            <p style={{ textAlign: "end", color: "black" }}>{items.Experience[7].start_date} to {items.Experience[7].end_date}</p>

                                                                        </div>
                                                                    </div>
                                                                    <h5>{items.Experience[7].project_name}</h5>

                                                                    {/* <p>{items.Experience[7].job_discription}</p> */}

                                                                    {
                                                                        getdata8 === null ? <p>{items.Experience[7].job_discription}</p> :
                                                                            getdata8.map((item7, key) => {
                                                                                return (
                                                                                    <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item7.slice(1, item7.length - 1)}</p>
                                                                                )
                                                                            })
                                                                    }
                                                                    <p><strong>Project_urls:-</strong> <a href={items.Experience[7].project_urls} target="_blank"> {items.Experience[7].project_urls} </a></p>
                                                                </div>
                                                        }
                                                    </div>
                                                </>

                                        }
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
