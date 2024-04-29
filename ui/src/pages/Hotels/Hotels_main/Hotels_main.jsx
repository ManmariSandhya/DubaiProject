import './Hotels_main.css';

// import haleem from '../../../assets/images/haleem.jpg';
// import haleem1 from '../../../assets/images/haleem1.jpg';
// import haleem2 from '../../../assets/images/haleem2.jpg';
// import haleem3 from '../../../assets/images/haleem3.webp';
// import haleem4 from '../../../assets/images/haleem4.webp';
// import { CurrencyRupee, StarFill } from 'react-bootstrap-icons';

// export function HotelMainComponent() {
//     return (
//         <div>
//             <div className='hotel-main-container'>
//                 <div className='row'>
//                     <div className='col-4'>
//                         <div className="card hotel_card" style={{ width: "18rem" }}>
//                             <img src={haleem1} className="card-img-top" alt="..."></img>
//                             <div className="card-body">
//                                 <h5 className="card-title">Paradise, Begumpet &nbsp; &nbsp;
//                                     <span className='hotel_ratings'>4.5<StarFill style={{ fontSize: '15px' }}></StarFill></span>
//                                 </h5>

//                                 <h6 className="card-subtitle mb-2 text-muted">Mutton Haleem</h6>
//                                 <h6>Mrp : <CurrencyRupee></CurrencyRupee>350rs</h6>
//                                 <p className="card-text">
//                                     Location: SD Road, Sappu Bagh Apartment, Jogani, Ramgopalpet, Secunderabad, Telangana 500003</p>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Order Now</a>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>

//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-4'>
//                         <div className="card hotel_card" style={{ width: "18rem" }}>
//                             <img src={haleem2} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
//                             <div className="card-body">
//                                 <h5 className="card-title">Bawarchi, Abids &nbsp; &nbsp; &nbsp; &nbsp;
//                                     <span className='hotel_ratings'>4.8<StarFill style={{ fontSize: '15px' }}></StarFill></span>
//                                 </h5>

//                                 <h6 className="card-subtitle mb-2 text-muted">Mutton Haleem</h6>
//                                 <h6>Mrp : <CurrencyRupee></CurrencyRupee>500rs</h6>
//                                 <p className="card-text">
//                                     Location: SD Road, Sappu Bagh Apartment, Jogani, Ramgopalpet, Secunderabad, Telangana 500003</p>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Order Now</a>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>

//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-4'>
//                         <div className="card hotel_card" style={{ width: "18rem" }}>
//                             <img src={haleem3} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
//                             <div className="card-body">
//                                 <h5 className="card-title">Hadab &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//                                     <span className='hotel_ratings'>3.5<StarFill style={{ fontSize: '15px' }}></StarFill></span>
//                                 </h5>

//                                 <h6 className="card-subtitle mb-2 text-muted">Mutton Haleem</h6>
//                                 <h6>Mrp : <CurrencyRupee></CurrencyRupee>250rs</h6>
//                                 <p className="card-text">
//                                     Location: SD Road, Sappu Bagh Apartment, Jogani, Ramgopalpet, Secunderabad, Telangana 500003</p>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Order Now</a>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>

//                             </div>
//                         </div>
//                     </div>

//                 </div>
//               </div>
//               <div className='hotel-main-container1'>
//                 <div className='row'>
//                     <div className='col-4'>
//                         <div className="card hotel_card" style={{ width: "18rem" }}>
//                             <img src={haleem3} className="card-img-top" alt="..." style={{height:'190px'}}></img>
//                             <div className="card-body">
//                                 <h5 className="card-title">Pistha House &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//                                     <span className='hotel_ratings'>4.7<StarFill style={{ fontSize: '15px' }}></StarFill></span>
//                                 </h5>

//                                 <h6 className="card-subtitle mb-2 text-muted">Mutton Haleem</h6>
//                                 <h6>Mrp : <CurrencyRupee></CurrencyRupee>350rs</h6>
//                                 <p className="card-text">
//                                     Location: SD Road, Sappu Bagh Apartment, Jogani, Ramgopalpet, Secunderabad, Telangana 500003</p>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Order Now</a>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>

//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-4'>
//                         <div className="card hotel_card" style={{ width: "18rem" }}>
//                             <img src={haleem4} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
//                             <div className="card-body">
//                                 <h5 className="card-title">Haleem House  &nbsp; &nbsp; &nbsp; &nbsp;
//                                     <span className='hotel_ratings'>4.0<StarFill style={{ fontSize: '15px' }}></StarFill></span>
//                                 </h5>

//                                 <h6 className="card-subtitle mb-2 text-muted">Mutton Haleem</h6>
//                                 <h6>Mrp : <CurrencyRupee></CurrencyRupee>470rs</h6>
//                                 <p className="card-text">
//                                     Location: SD Road, Sappu Bagh Apartment, Jogani, Ramgopalpet, Secunderabad, Telangana 500003</p>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Order Now</a>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>

//                             </div>
//                         </div>
//                     </div>
//                     <div className='col-4'>
//                         <div className="card hotel_card" style={{ width: "18rem" }}>
//                             <img src={haleem} className="card-img-top" alt="..." style={{ height: '190px' }}></img>
//                             <div className="card-body">
//                                 <h5 className="card-title">Famous Haleem &nbsp; &nbsp; &nbsp; &nbsp; 
//                                     <span className='hotel_ratings'>3.5<StarFill style={{ fontSize: '15px' }}></StarFill></span>
//                                 </h5>

//                                 <h6 className="card-subtitle mb-2 text-muted">Mutton Haleem</h6>
//                                 <h6>Mrp : <CurrencyRupee></CurrencyRupee>299rs</h6>
//                                 <p className="card-text">
//                                     Location: SD Road, Sappu Bagh Apartment, Jogani, Ramgopalpet, Secunderabad, Telangana 500003</p>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Order Now</a>
//                                 <a href="#" className="card-link" style={{ textDecoration: 'none' }}>Contact Us</a>

//                             </div>
//                         </div>
//                     </div>

//                 </div>

//               </div>
//         </div>
//     )
// }




import hotel1 from '../../../assets/images/hotel1.jpg';
import hotel2 from '../../../assets/images/hotel2.jpg';
import hotel3 from '../../../assets/images/hotel3.avif';
import hotel4 from '../../../assets/images/hotel4.jpg';
import hotel5 from '../../../assets/images/hotel5.jpg';
import hotel6 from '../../../assets/images/hotel6.jpg';
import hotel7 from '../../../assets/images/hotel7.jpg';
import hotel8 from '../../../assets/images/hotel8.jpg';
import hotel9 from '../../../assets/images/hotel9.jpg';
import { StarFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
export function HotelMainComponent() {
    return (
        <div>
        <div className='hotel_main_container'>
            <div className='row' >
                <div className='col-4' >
                    <Link to="/golkonda_hotel">
                    <img src={hotel1} className='hotel_images'></img>
                    </Link>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>The Golkonda Resort</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>4.2&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 24 hours</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>24km</p>
                        </div>
                    </div>
                </div>
                <div className='col-4' >
                    <img src={hotel2} className='hotel_images'></img>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>The Park Hyderabad</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>4.2&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 9:00 AM to Closes 5:00 PM</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>24km</p>
                        </div>
                    </div>
                </div>
                <div className='col-4' >
                    <img src={hotel3} className='hotel_images'></img>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>Taj Falaknama Palace</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>4.7&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 12:30 PM to Closes 11:30 PM</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>24km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='hotel_main_container'>
            <div className='row' >
                <div className='col-4' >
                    <img src={hotel4} className='hotel_images'></img>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>Amrutha Castle</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>4.0&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 24 hours</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>20km</p>
                        </div>
                    </div>
                </div>
                <div className='col-4' >
                    <img src={hotel5} className='hotel_images'></img>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>The Manohar</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>3.5&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 9:00 AM to Closes 5:00 PM</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>24km</p>
                        </div>
                    </div>
                </div>
                <div className='col-4' >
                    <img src={hotel6} className='hotel_images'></img>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>Hyyat Hyderabad</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>4.3&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 10:30 PM to Closes 11:00 PM</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>24km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='hotel_main_container'>
            <div className='row' >
                <div className='col-4' >
                    <img src={hotel7} className='hotel_images'></img>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>Royalton Hotel</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>4.7&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 9:00 AM to Closes 11:00 PM</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>45km</p>
                        </div>
                    </div>
                </div>
                <div className='col-4' >
                    <img src={hotel8} className='hotel_images'></img>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>Novotel Hyderabad Convention</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>4.6&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 9:00 AM to Closes 5:00 PM</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>24km</p>
                        </div>
                    </div>
                </div>
                <div className='col-4' >
                    <img src={hotel9} className='hotel_images'></img>
                    <div className='row mt-3'>
                        <div className='col-8'>
                            <span><b>Taj Krishna</b></span>
                        </div>
                        <div className='col-2'>
                            <span className='hotel_ratings'>4.7&nbsp;<StarFill></StarFill></span>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p>Relaxed choice at the ITC hotel offering Indian & international cuisine from a buffet or a la carte.</p>
                        </div>
                        <div className='col-2'>2 Beds</div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>Opens 12:30 PM to Closes 11:30 PM</p>
                        </div>
                        <div className='col-2'>
                            <p style={{ color: 'rgb(234, 17, 158)' }}>24km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}