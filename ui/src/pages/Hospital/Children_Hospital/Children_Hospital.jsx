import './Children_Hospital.css';
import children_image1 from '../../../assets/images/children_image1.jpg';
import { PersonCircle, Share, Signpost, Star, StarFill, Stars, SuitHeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export function ChildrenHospitalComponent() {
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
                <div className='mt-5'>
                {/* children details */}
                    <span>
                        <div className='dropdown'>
                            <button className='drowpdown-toggle menu-item' style={{border:'none',background:'white',fontSize:'20px'}}>
                                <span className='item-txt'>Overview</span>
                            </button>
                            <ul className='dropdown-menu'>
                                <li className='menu-item-list'>
                                    <h3> About this place</h3>
                                </li>
                                <p className='menu-item-list'>
                                    Rainbow Children's Hospital & BirthRight, located in Banjara Hills, established in 1999, stands as a distinguished medical institution holding NABH and JCI accreditation. Boasting over 250 beds, this facility is an all-encompassing spectrum of specialized care within the disciplines of Pediatrics, Neonatology, Obstetrics, Gynecology and Fertility. The institution is integrated with cutting-edge technology and fortified by world-class infrastructure. Its scope extends to superior tertiary and quaternary care, even encompassing pediatric organ transplants. The hospital's advanced intensive care units are primed to respond to critical emergencies, furnished with state-of-the-art provisions such as CPAP, advanced ventilation, and transportation services. </p>
                                <p><b>Address:</b> Road No. 2, beside park Hyatt, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills, Hyderabad, Telangana 500034</p>
                                 <p><b> Areas served: </b>  Jubilee Hills and nearby areas</p>
                                 <p><b>  Hours:</b> 
                                    Open 24 hours</p>
                                  <p><b>  Phone: </b>080 3535 8317</p>
                            </ul>
                        </div>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                        <div className='dropdown ml-5'>
                            <button className='drowpdown-toggle menu-item' style={{border:'none',background:'white',fontSize:'20px'}}>
                                <span className='item-txt'>We Are Special In</span>
                            </button>
                            <ul className='dropdown-menu'>
                                <li >
                                    ChildCare
                                </li>
                                <li>Pediatric Specialties</li>
                                <li>Obstetrics</li>
                                <li>Gynecology</li>
                                <li>Fertility Care</li>
                            </ul>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>
                        <div className='dropdown ml-5'>
                            <button className='drowpdown-toggle menu-item' style={{border:'none',background:'white',fontSize:'20px'}} >
                                <span className='item-txt'>Reviews</span>
                            </button>
                            <ul className='dropdown-menu'>
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
                                    <p className='mt-0'>____________________________________________________________________________________________________________________________________________________</p>
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
                              
                            </ul>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span>
                        <div className='dropdown ml-5'>
                            <button className='drowpdown-toggle menu-item' style={{border:'none',background:'white',fontSize:'20px'}}>
                                <span className='item-txt'>Book appointment</span>
                            </button>
                            <ul className='dropdown-menu'>
                                <li className='menu-item-list'>

                                </li>
                                <form className='menu-item-list'>
                                    <div class="row g-3">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div class="row g-3 mt-2">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Address" aria-label="Address" />
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number" />
                                        </div>
                                    </div>
                                    <div>
                                        <select class="form-control mt-4">
                                            <option>--- Select Your Problem ----</option>
                                            <option>Fever</option>
                                            <option>Cold</option>

                                        </select>
                                    </div>
                                    <div className='mt-4'>
                                        <button style={{ border: '1px solid', color: 'white', background: 'blue', padding: '10px', borderRadius: '5px', marginTop: '5px' }}>Submit</button>
                                    </div>
                                </form>

                            </ul>
                        </div>
                    </span>
                </div>

            </div>
        </div>
    )
}