import './Hotels_main.css';

import hotel1 from '../../../assets/images/hotel1.jpg';
import hotel2 from '../../../assets/images/hotel2.jpg';
import hotel3 from '../../../assets/images/hotel3.avif';
import hotel4 from '../../../assets/images/hotel4.jpg';
import hotel5 from '../../../assets/images/hotel5.jpg';
import hotel6 from '../../../assets/images/hotel6.jpg';
import hotel7 from '../../../assets/images/hotel7.jpg';

import { StarFill } from 'react-bootstrap-icons';


export function HotelMainComponent() {
    return (
        <div>
            <div className='haleem-main-container'>
                <div className='row g-3'>
                    <div className='col-12 col-md-6 col-lg-3 ' style={{paddingLeft:'34px'}}>
                        
                            <div className="card haleem_card" style={{ width: "18rem" }}>
                                <img src={hotel1} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">The Golkonda Resort &nbsp; 
                                        <span className='haleem_ratings'>4.2<StarFill style={{ fontSize: '15px' }}></StarFill></span>
                                    </h5>
                                    <p className="card-text">
                                        Location:10-1-124, Mehdipatnam - Banjara Hills Rd, Ambedkar Nagar, Masab Tank, Hyderabad, Telangana 500028</p>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Book Now</a>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>
                                </div>
                           
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3' style={{paddingLeft:'34px'}}>
                  
                            <div className="card haleem_card" style={{ width: "18rem" }}>
                                <img src={hotel2} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
                                <div className="card-body">
                                    <h5 className="card-title">Royalton Hotel&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                        <span className='haleem_ratings'>4.1<StarFill style={{ fontSize: '15px' }}></StarFill></span>
                                    </h5>

                                    {/* <p className="card-text">
                                        Location: 5-9-208/2, Chirag Ali Ln, Mahesh Nagar, Abids, Hyderabad, Telangana 500001•040 6712 2000</p> */}
                                        <p className="card-text">
                                        Location:10-1-124, Mehdipatnam - Banjara Hills Rd, Ambedkar Nagar, Masab Tank, Hyderabad, Telangana 500028</p>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Book Now</a>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>

                               
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 ' style={{paddingLeft:'34px'}}>
                        
                            <div className="card haleem_card" style={{ width: "18rem" }}>
                                <img src={hotel3} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
                                <div className="card-body">
                                    <h5 className="card-title">Marigold Hotel &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                                        <span className='haleem_ratings'>4.4<StarFill style={{ fontSize: '15px' }}></StarFill></span>
                                    </h5>

                                    {/* <p className="card-text">
                                        Location: 7-1-25, Ameerpet Rd, Leelanagar, Begumpet, Hyderabad, Telangana 500016•040 6736 3636</p> */}
                                        <p className="card-text">
                                        Location:10-1-124, Mehdipatnam - Banjara Hills Rd, Ambedkar Nagar, Masab Tank, Hyderabad, Telangana 500028</p>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Book Now</a>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>
                               
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 ' style={{paddingLeft:'34px'}}>
                        <div className="card haleem_card" style={{ width: "18rem" }}>
                                <img src={hotel4} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Hotel Grand Himayat &nbsp;
                                        <span className='haleem_ratings'>4.1<StarFill style={{ fontSize: '15px' }}></StarFill></span>
                                    </h5>
                                    <p className="card-text">
                                        Location: MPM Millenium Wajhuddin Estate,Hotel Grand Himayat Plot No.3-6-552 to 558 ,Hyderabad,Telangana 500029</p>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Book Now</a>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='haleem-main-container1'>
                <div className='row g-3'>
                    <div className='col-12 col-md-6 col-lg-3 ' style={{paddingLeft:'34px'}}>
                        
                            <div className="card haleem_card" style={{ width: "18rem" }}>
                                <img src={hotel5} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
                                <div className="card-body">
                                    <h5 className="card-title">The Park Hyderabad &nbsp;
                                        <span className='haleem_ratings'>4.2<StarFill style={{ fontSize: '15px' }}></StarFill></span>
                                    </h5>
                                    {/* <p className="card-text">
                                        Location: 22, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana 500082</p> */}
                                        <p className="card-text">
                                        Location: 5-9-16, NH 44, opposite State Secretariat, Ambedkar Colony, Khairtabad, Hyderabad, Telangana 500063</p>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Book Now</a>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>
                              
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 ' style={{paddingLeft:'34px'}}>
                       
                            <div className="card haleem_card" style={{ width: "18rem" }}>
                                <img src={hotel6} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
                                <div className="card-body">
                                    <h5 className="card-title">Novotel Hyderabad  &nbsp;&nbsp;&nbsp;
                                        <span className='haleem_ratings'>4.0<StarFill style={{ fontSize: '15px' }}></StarFill></span>
                                    </h5>
                                    <p className="card-text">
                                        Location:Bag 1101 Cyberabad, Post Office, Novotel & HICC Complex, P.O, near Hitec City, Hyderabad, Telangana 500081</p>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Book Now</a>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>
                                </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 ' style={{paddingLeft:'34px'}}>
                        
                            <div className="card haleem_card" style={{ width: "18rem" }}>
                                <img src={hotel7} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
                                <div className="card-body">
                                    <h5 className="card-title">Amrutha Castle &nbsp; &nbsp; &nbsp; &nbsp;
                                        <span className='haleem_ratings'>3.5<StarFill style={{ fontSize: '15px' }}></StarFill></span>
                                    </h5>
                                    <p className="card-text">
                                        Location: 5-9-16, NH 44, opposite State Secretariat, Ambedkar Colony, Khairtabad, Hyderabad, Telangana 500063</p>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Book Now</a>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>
                             
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3 ' style={{paddingLeft:'34px'}}>
                       <div className="card haleem_card" style={{ width: "18rem" }}>
                                <img src={hotel1} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Taj Falaknuma Palace &nbsp; 
                                        <span className='haleem_ratings'>4.2<StarFill style={{ fontSize: '15px' }}></StarFill></span>
                                    </h5>
                                    {/* <p className="card-text">
                                        Location: Engine Bowli, Falaknuma, Hyderabad, Telangana 500053</p> */}
                                        <p className="card-text">
                                        Location: 5-9-16, NH 44, opposite State Secretariat, Ambedkar Colony, Khairtabad, Hyderabad, Telangana 500063</p>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Book Now</a>
                                    <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}


