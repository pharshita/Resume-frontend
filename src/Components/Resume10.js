import React, { useEffect, useState, useRef } from 'react'
import ReactToPrint from 'react-to-print';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import axios from 'axios';
import user from '../images/user.jpeg'

export default function Resume10() {
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

    const componentRef = useRef();

    const [data1, setdata] = useState([])
    useEffect(() => {
        const id = window.localStorage.getItem('id')
        // console.log(id)
        axios.get(`http://127.0.0.1:8000/api/resume/${id}/`, config).then((res) => {
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
    let getdata9 = JSON.parse(window.localStorage.getItem('data9'))
    let getdata10 = JSON.parse(window.localStorage.getItem('data10'))
    let getdata11 = JSON.parse(window.localStorage.getItem('data11'))
    let getdata12 = JSON.parse(window.localStorage.getItem('data12'))
    return (
        <div>
            <div className='container resume4 mt-4' ref={componentRef} style={{ width: "70%", padding: "0px" }}>
                <div className='row pb-5' style={{ backgroundColor: "#f1ede7" }}>
                    {
                        data1.map((items) => {
                            let image = items.profile_image
                            return (

                                <>
                                    <div className='d-flex' style={{ justifyContent: "space-between" }}>
                                        <div style={{ width: "70%", backgroundColor: "#b3888d", borderBottomLeftRadius: "33px", borderBottomRightRadius: "33px", textAlign: "center", color: "white", paddingTop: "50px" }}>
                                            <h1 >{items.first_name} {items.last_name}</h1>
                                            <h5 >{items.profession}</h5>

                                        </div>
                                        <div style={{ width: "30%", display: "flex", justifyContent: "center" }}>
                                            {
                                                items.profile_image === null ? <img src={user} alt='no image' style={{ height: "209px", width: "70%", borderBottomRightRadius: "33px", borderBottomLeftRadius: "33px" }}></img> : <img src={` http://127.0.0.1:8000/${image}`} style={{ height: "209px", width: "70%", borderBottomRightRadius: "33px", borderBottomLeftRadius: "33px" }}></img>

                                            }

                                        </div>

                                    </div>
                                    <div style={{ padding: "50px 100px 20px 50px" }}>
                                        <h5 style={{ fontWeight: "bold" }}>Personal Detail</h5>
                                        <p style={{ fontSize: "14px" }}>{items.profile_summary}</p>
                                    </div>
                                    <div className='d-flex mt-5' style={{ justifyContent: "space-between" }}>
                                        <div style={{ width: "40%" }}>
                                            <div>

                                                <h5 style={{ fontWeight: "bold", paddingLeft: "40px" }}>Experience</h5>
                                                <div style={{ padding: "10px 10px 10px 50px" }}>


                                                    <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[0].job_title} in {items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                    <h5 style={{ fontSize: "17px" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</h5>
                                                    <h5>{items.Experience[0].project_name}</h5>

                                                    {/* <p>{items.Experience[0].job_discription}</p> */}
                                                    {
                                                        getdata.map((item, key) => {
                                                            return (
                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item.slice(1, item.length - 1)}</p>
                                                            )
                                                        })
                                                    }
                                                    <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>

                                                </div>
                                                {
                                                    items.Experience[1] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[0].job_title} in {items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</h5>
                                                                <h5>{items.Experience[1].project_name}</h5>

                                                                {/* <p>{items.Experience[1].job_discription}</p> */}
                                                                {
                                                                    getdata2.map((item1, key) => {
                                                                        return (
                                                                            <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item1.slice(1, item1.length - 1)}</p>
                                                                        )
                                                                    })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }

                                                {
                                                    items.Experience[2] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[2].job_title} in {items.Experience[2].Company_name} {items.Experience[2].city},{items.Experience[2].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[2].start_date} to {items.Experience[2].end_date}</h5>
                                                                <h5>{items.Experience[2].project_name}</h5>

                                                                {/* <p>{items.Experience[2].job_discription}</p> */}
                                                                {
                                                                    getdata3.map((item2, key) => {
                                                                        return (
                                                                            <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item2.slice(1, item2.length - 1)}</p>
                                                                        )
                                                                    })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[2].project_urls} target="_blank"> {items.Experience[2].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[3] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[3].job_title} in {items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[3].start_date} to {items.Experience[3].end_date}</h5>
                                                                <p style={{ paddingLeft: "20px" }}>{items.Experience[3].job_discription}</p> <h5>{items.Experience[3].project_name}</h5>

                                                                {/* <p>{items.Experience[3].job_discription}</p> */}

                                                                {
                                                                    getdata4 === null ? " " :
                                                                        getdata4.map((item3, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item3.slice(1, item3.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[4] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[4].job_title} in {items.Experience[4].Company_name} {items.Experience[4].city},{items.Experience[4].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[4].start_date} to {items.Experience[4].end_date}</h5>
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
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[4].project_urls} target="_blank"> {items.Experience[4].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[5] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[5].job_title} in {items.Experience[5].Company_name} {items.Experience[5].city},{items.Experience[5].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[5].start_date} to {items.Experience[5].end_date}</h5>
                                                                <h5>{items.Experience[5].project_name}</h5>

                                                                {/* <p>{items.Experience[5].job_discription}</p> */}
                                                                {
                                                                    getdata6 === null ? "" :
                                                                        getdata6.map((item5, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item5.slice(1, item5.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[5].project_urls} target="_blank"> {items.Experience[5].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[6] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[6].job_title} in {items.Experience[6].Company_name} {items.Experience[6].city},{items.Experience[6].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[6].start_date} to {items.Experience[6].end_date}</h5>
                                                                <h5>{items.Experience[6].project_name}</h5>

                                                                {/* <p>{items.Experience[6].job_discription}</p> */}

                                                                {
                                                                    getdata7 === null ? "" :
                                                                        getdata7.map((item6, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item6.slice(1, item6.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[6].project_urls} target="_blank"> {items.Experience[6].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[7] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[7].job_title} in {items.Experience[7].Company_name} {items.Experience[7].city},{items.Experience[7].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[7].start_date} to {items.Experience[7].end_date}</h5>
                                                                <h5>{items.Experience[7].project_name}</h5>

                                                                {/* <p>{items.Experience[6].job_discription}</p> */}

                                                                {
                                                                    getdata8 === null ? "" :
                                                                        getdata8.map((item7, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item7.slice(1, item7.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[7].project_urls} target="_blank"> {items.Experience[7].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[8] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[8].job_title} in {items.Experience[8].Company_name} {items.Experience[8].city},{items.Experience[8].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[8].start_date} to {items.Experience[8].end_date}</h5>
                                                                <h5>{items.Experience[8].project_name}</h5>

                                                                {/* <p>{items.Experience[8].job_discription}</p> */}

                                                                {
                                                                    getdata9 === null ? "" :
                                                                        getdata9.map((item8, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item8.slice(1, item8.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[8].project_urls} target="_blank"> {items.Experience[8].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[9] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[9].job_title} in {items.Experience[9].Company_name} {items.Experience[9].city},{items.Experience[9].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[9].start_date} to {items.Experience[9].end_date}</h5>
                                                                <h5>{items.Experience[9].project_name}</h5>

                                                                {/* <p>{items.Experience[9].job_discription}</p> */}
                                                                {
                                                                    getdata10 === null ? "" :
                                                                        getdata10.map((item9, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item9.slice(1, item9.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[9].project_urls} target="_blank"> {items.Experience[9].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[10] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[10].job_title} in {items.Experience[10].Company_name} {items.Experience[10].city},{items.Experience[10].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[10].start_date} to {items.Experience[10].end_date}</h5>
                                                                <h5>{items.Experience[10].project_name}</h5>

                                                                {/* <p>{items.Experience[10].job_discription}</p> */}
                                                                {
                                                                    getdata11 === null ? "" :
                                                                        getdata11.map((item10, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item10.slice(1, item10.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[10].project_urls} target="_blank"> {items.Experience[10].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                                {
                                                    items.Experience[11] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: "10px 10px 10px 50px" }}>

                                                                <h5 style={{ textTransform: "capitalize", fontSize: "17px" }}>{items.Experience[11].job_title} in {items.Experience[11].Company_name} {items.Experience[11].city},{items.Experience[11].country}</h5>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Experience[11].start_date} to {items.Experience[11].end_date}</h5>
                                                                <h5>{items.Experience[11].project_name}</h5>

                                                                {/* <p>{items.Experience[11].job_discription}</p> */}
                                                                {
                                                                    getdata12 === null ? "" :
                                                                        getdata12.map((item11, key) => {
                                                                            return (
                                                                                <p>&nbsp;&nbsp;&nbsp;&nbsp; • {item11.slice(1, item11.length - 1)}</p>
                                                                            )
                                                                        })
                                                                }
                                                                <p style={{ paddingLeft: "20px" }}><strong>Project_urls:-</strong> <a href={items.Experience[11].project_urls} target="_blank"> {items.Experience[11].project_urls} </a></p>

                                                            </div>
                                                        </>

                                                }
                                            </div>
                                            <div>
                                                <h5 style={{ fontWeight: "bold", paddingLeft: "40px", marginTop: "50px" }}>Skills</h5>

                                                <div style={{ padding: "10px 10px 10px 80px" }}>
                                                    <p style={{ marginBottom: "0px" }}>{items.skills[0]}</p>
                                                    {
                                                        items.skills[1] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[1]}</p>
                                                    }
                                                    {
                                                        items.skills[2] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[2]}</p>
                                                    }
                                                    {
                                                        items.skills[3] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[3]}</p>
                                                    }
                                                    {
                                                        items.skills[4] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[4]}</p>
                                                    }
                                                    {
                                                        items.skills[5] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[5]}</p>
                                                    }
                                                    {
                                                        items.skills[6] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[6]}</p>
                                                    }
                                                    {
                                                        items.skills[7] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[7]}</p>
                                                    }
                                                    {
                                                        items.skills[8] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[8]}</p>
                                                    }
                                                    {
                                                        items.skills[9] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[9]}</p>
                                                    }
                                                    {
                                                        items.skills[10] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[10]}</p>
                                                    }
                                                    {
                                                        items.skills[11] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[11]}</p>
                                                    }
                                                    {
                                                        items.skills[12] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[12]}</p>
                                                    }
                                                    {
                                                        items.skills[13] === undefined ? "" : <p style={{ marginBottom: "0px" }}>{items.skills[13]}</p>
                                                    }


                                                </div>

                                            </div>

                                        </div>
                                        <div style={{ width: "40%" }}>


                                            <div>

                                                <h5 style={{ fontWeight: "bold" }}>Education</h5>
                                                <div style={{ padding: "10px " }}>
                                                    <h5 style={{ fontSize: "17px" }}>{items.Education[0].school_name},{items.Education[0].school_location}</h5>
                                                    <p style={{ fontSize: "14px" }}>({items.Education[0].start_date} to {items.Education[0].end_date})</p>
                                                    <p>{items.Education[0].degree}</p>
                                                    <p>{items.Education[0].field_of_study}</p>
                                                </div >
                                                {
                                                    items.Education[1] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: " 10px" }}>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Education[1].school_name},{items.Education[1].school_location}</h5>
                                                                <p style={{ fontSize: "14px" }}>({items.Education[1].start_date} to {items.Education[1].end_date})</p>
                                                                <p>{items.Education[1].degree}</p>
                                                                <p>{items.Education[1].field_of_study}</p>
                                                            </div>
                                                        </>

                                                }

                                                {
                                                    items.Education[2] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: " 10px" }}>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Education[2].school_name},{items.Education[2].school_location}</h5>
                                                                <p style={{ fontSize: "14px" }}>({items.Education[2].start_date} to {items.Education[2].end_date})</p>
                                                                <p>{items.Education[2].degree}</p>
                                                                <p>{items.Education[2].field_of_study}</p>
                                                            </div >
                                                        </>
                                                }
                                                {
                                                    items.Education[3] === undefined ? "" :
                                                        <>
                                                            <div style={{ padding: " 10px" }}>
                                                                <h5 style={{ fontSize: "17px" }}>{items.Education[3].school_name},{items.Education[3].school_location}</h5>
                                                                <p style={{ fontSize: "14px" }}>({items.Education[3].start_date} to {items.Education[3].end_date})</p>
                                                                <p>{items.Education[3].degree}</p>
                                                                <p>{items.Education[3].field_of_study}</p>
                                                            </div>
                                                        </>

                                                }


                                            </div>
                                            <div>
                                                <div style={{ backgroundColor: "#d5c7b4", padding: "50px", marginRight: "-10px", borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" }}>
                                                    <h5 style={{ fontWeight: "bold", paddingBottom: "20px" }}>Contact</h5>
                                                    <p>{items.city}, {items.country} {items.pin_code}</p>
                                                    <p>{items.phone_number}</p>
                                                    <p>{items.email}</p>
                                                </div>


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
