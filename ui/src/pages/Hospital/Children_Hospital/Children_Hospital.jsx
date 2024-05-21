import './Children_Hospital.css';
import children_image1 from '../../../assets/images/children_image1.jpg';
import { PersonCircle, Share, Signpost, Star, StarFill, Stars, SuitHeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { Tabs } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { TabPane } = Tabs;
export function ChildrenHospitalComponent() {
    const [bookAppointment, setBookAppointment] = useState({
        firstname: '',
        lastname: '',
        address: '',
        phonenumber: '',
        selectyourproblem: ''
    });

    const handleChange = (e) => {
        setBookAppointment({ ...bookAppointment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:6010/api/bookAppointment', bookAppointment);
            alert("Details saved")
            // Optionally, you can add a success message or redirect the user
        } catch (error) {
            console.error('Error submitting review:', error);
            // Handle error
        }
    };
    useEffect(() => { }, []);
    return (
        <div>
            <img src={children_image1} className='children1'></img>
            <div className='children_main_container '>
                <h4>Rainbow Children’s Hospital & BirthRight
                    <span className='rainbow_hospital_ratings'>4.7<StarFill style={{ fontSize: '10px' }}></StarFill></span>
                </h4>
                <h6 style={{ color: 'GrayText' }}>Banjara Hills, Hyderabad - Best Maternity Hospital</h6>
                <h6 style={{ color: 'GrayText' }}> Road No. 2, beside park Hyatt, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills, Hyderabad, Telangana 500034</h6>
                <h6 className='hospital_timings'>Opens at 24 hours</h6>
                <button style={{ padding: '8px', borderRadius: '8px', marginTop: '8px' }}><Signpost></Signpost>  Directions</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button style={{ padding: '8px', borderRadius: '8px' }}><Share></Share>  Share</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button style={{ padding: '8px', borderRadius: '8px' }}><SuitHeartFill></SuitHeartFill>  Favorites</button>

                <div>
                    <Tabs defaultActivekey="1" >
                        <TabPane tab="Overview" key="1" >
                            <h3> About this place</h3>
                            <p className='menu-item-list'>
                                Rainbow Children's Hospital & BirthRight, located in Banjara Hills, established in 1999, stands as a distinguished medical institution holding NABH and JCI accreditation. Boasting over 250 beds, this facility is an all-encompassing spectrum of specialized care within the disciplines of Pediatrics, Neonatology, Obstetrics, Gynecology and Fertility. The institution is integrated with cutting-edge technology and fortified by world-class infrastructure. Its scope extends to superior tertiary and quaternary care, even encompassing pediatric organ transplants. The hospital's advanced intensive care units are primed to respond to critical emergencies, furnished with state-of-the-art provisions such as CPAP, advanced ventilation, and transportation services. </p>
                            <p><b>Address:</b> Road No. 2, beside park Hyatt, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills, Hyderabad, Telangana 500034</p>
                            <p><b> Areas served: </b>  Jubilee Hills and nearby areas</p>
                            <p><b>  Hours:</b>
                                Open 24 hours</p>
                            <p><b>  Phone: </b>080 3535 8317</p>
                        </TabPane>
                        <TabPane tab="We Are Special In" key="2">
                            <li >
                                ChildCare
                            </li>
                            <li>Pediatric Specialties</li>
                            <li>Obstetrics</li>
                            <li>Gynecology</li>
                            <li>Fertility Care</li>
                        </TabPane>
                        <TabPane tab="Review & Ratings" key="3" style={{width:'400px'}}>
                            <li className='menu-item-list'>
                                <h4>Rainbow Children’s Hospital & BirthRight</h4>
                            </li>
                            <li>All Reviews</li>
                            <div>
                                <span><PersonCircle></PersonCircle></span>
                                &nbsp;&nbsp;<span>Sandhya</span>
                            </div>
                            <div className='mt-3'>
                                <span style={{ border: '1px solid', color: 'white', background: 'green', padding: '5px', borderRadius: '3px' }}>4.7<StarFill style={{ fontSize: '10px' }}></StarFill></span>
                                &nbsp;&nbsp;
                                <span>Childcare</span>
                                <p className='mt-2'>"Excellent treatment nd good service experience doctor nd innocent staff"</p>
    <hr></hr>
                            </div>
                            <form>
                                <h2>Question & Answers</h2>
                                <div>
                                    <label>Would you like to ask a question?</label>
                                    <div>
                                        <input type="text" placeholder='Post your Question' className='mt-2'></input>
                                    </div>
                                </div>
                            </form>

                            <h5 className='mt-4'>Start your Rating</h5>
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>  &nbsp;&nbsp; &nbsp;&nbsp;
                            <span className='mt-4'><Star style={{ border: '1px solid', borderRadius: '5px', padding: '10px', fontSize: '50px' }}></Star></span>
                            <div className='mt-5'>
                                <span style={{ border: '1px solid', borderRadius: '10px', padding: '10px', textAlign: 'center' }}><b>Write a Review</b></span>
                            </div>
                        </TabPane>
                        <TabPane tab="Book An Appointment" key="4" style={{width:'400px'}}>
                            
                            <form onSubmit={handleSubmit} >
                                <div class="row g-3">
                                    <div class="col">
                                        <input type="text" name='firstname' value={bookAppointment.firstname} className="form-control" placeholder="First name" aria-label="First name" onChange={handleChange} style={{width:'400px'}}/>
                                    </div>
                                    <div class="col">
                                        <input type="text" name='lastname' value={bookAppointment.lastname} className="form-control" placeholder="Last name" aria-label="Last name" onChange={handleChange} style={{width:'400px'}} />
                                    </div>
                                </div>
                                <div class="row g-3 mt-2">
                                    <div class="col">
                                        <input type="text" name='address' value={bookAppointment.address} className="form-control" placeholder="Address" aria-label="Address" onChange={handleChange} style={{width:'400px'}}/>
                                    </div>
                                    <div class="col">
                                        <input type="text" name="phonenumber" value={bookAppointment.phonenumber} className="form-control" placeholder="Phone Number" aria-label="Phone Number" onChange={handleChange} style={{width:'400px'}}/>
                                    </div>
                                </div>
                                <div>
                                    <select className="form-control mt-4" name='selectyourproblem' value={bookAppointment.selectyourproblem} onChange={handleChange} style={{width:'400px'}}>
                                        <option>--- Select Your Problem ----</option>
                                        <option>Fever</option>
                                        <option>Cold</option>

                                    </select>
                                </div>
                                <div className='mt-4'>
                                    <button style={{ border: '1px solid', color: 'white', background: '#688aed', padding: '10px', borderRadius: '5px', marginTop: '5px' ,fontSize:'20px'}}>Submit</button>
                                </div>
                            </form>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}