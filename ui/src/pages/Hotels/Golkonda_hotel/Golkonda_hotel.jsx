import './Golkonda_hotel.css';
import hotel1 from '../../../assets/images/hotel1.jpg';
import { Arrow90degRight, PersonCircle, Share, Signpost, Star, StarFill, Stars, SuitHeartFill } from 'react-bootstrap-icons';



export function GolcondaHotelComponent() {
    return (
        <div>
            <img src={hotel1} className='children1'></img>
            <div className='children_main_container '>
                <h4>The Golkonda Resort
                    <span className='golconda_hotel_ratings'>4.2<StarFill style={{ fontSize: '10px' }}></StarFill></span>
                </h4>
                <h6 style={{ color: 'GrayText' }}>Address: 10-1-124, Mehdipatnam - Banjara Hills Rd, Ambedkar Nagar, Masab Tank, Hyderabad, Telangana 500028</h6>
              
                <h6 className='hospital_timings'>Opens at 24 hours</h6>
                <button style={{ padding: '8px', borderRadius: '8px', marginTop: '8px' }}><Signpost></Signpost>  Directions</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button style={{ padding: '8px', borderRadius: '8px' }}><Share></Share>  Share</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button style={{ padding: '8px', borderRadius: '8px' }}><SuitHeartFill></SuitHeartFill>  Favorites</button>
                <div className='mt-5' >
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
                                <p>We Have Been a Melting Pot of Comfort and Luxury for Businessmen, Leisure Travellers. Situated at the Heart of Hyderabad, We Have Been a Melting Pot of Comfort and Luxury.</p>
                                <p><b>Address: </b>10-1-124, Mehdipatnam - Banjara Hills Rd, Ambedkar Nagar, Masab Tank, Hyderabad, Telangana 500028</p>
                                 <p><b> Areas served: </b>  Mehdipatnam - Banjara Hills Rd and nearby areas</p>
                                 <p><b>  Hours:  </b> 
                                    Open 24 hours</p>
                                  
                            </ul>
                        </div>
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                        <div className='dropdown ml-5'>
                            <button className='drowpdown-toggle menu-item' style={{border:'none',background:'white',fontSize:'20px'}}>
                                <span className='item-txt'>Menu</span>
                            </button>
                            <ul className='dropdown-menu'>
                               <li><Arrow90degRight></Arrow90degRight> &nbsp; &nbsp;  2 Bed Rooms</li>
                               <li><Arrow90degRight></Arrow90degRight>&nbsp; &nbsp; Swimming Pool </li>
                               <li><Arrow90degRight></Arrow90degRight> &nbsp; &nbsp;Food</li>
                               <li></li>
                               <li></li>
                               <li></li>
                               <li></li>
                               <li></li>
                               <li></li>
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
                                    <h4>The Golconda Hotel</h4>
                                </li>
                                <li>All Reviews</li>
                                <div>
                                    <span><PersonCircle></PersonCircle></span>
                                    &nbsp;&nbsp;<span>Sandhya</span>
                                </div>
                                <div className='mt-3'>
                                    <span style={{ border: '1px solid', color: 'white', background: 'green', padding: '5px', borderRadius: '3px' }}>4.7<StarFill style={{ fontSize: '10px' }}></StarFill></span>
                                    &nbsp;&nbsp;
                                    <span>Hotel</span>
                                    <p className='mt-2'>"5 star service,polite staff, delicious food,rest rooms are well maintained"</p>
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
                                <span className='item-txt'>Book a Table</span>
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