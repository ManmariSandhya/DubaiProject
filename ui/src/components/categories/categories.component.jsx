// import './categories.component.css';
// import restaurant from '../../assets/images/restaurant.jpg';
// import tutorlogo from '../../assets/images/tutorlogo.jpg';
// import hotel from '../../assets/images/hotel.jpg';
// import eventplanner from '../../assets/images/eventplanner.jpg';
// import Travels from '../../assets/images/Travels.jpg';
// import beauty from '../../assets/images/beauty.jpg';
// import contractor from '../../assets/images/contractor.jpg';
// import ca from '../../assets/images/ca.jpg';
// import atm_card from '../../assets/images/atm_card.jpg';
// import hospital from '../../assets/images/hospital.jpg';
// import jewellery from '../../assets/images/jewellery.jpg';
// import service from '../../assets/images/service.jpg';
// import { Link } from 'react-router-dom';

// export function HomeCategories() {
//     return (
//         <div>
//             <div>
//                 <h1 style={{ fontSize: "33px", textAlign: "center" }} className='mt-5'>Most Popular Categories</h1>
//                 <br></br>
//                 <div style={{ marginLeft: "150px" }}>
//                     <div className='container'>

//                         <div className='row ' style={{ width: "100%" }}>

//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  ' style={{ alignItems: "center" }}>
//                                 <Link to="/restaurant-main" style={{ textDecoration: 'none', color: 'black' }}>
//                                     <img className="restaurant" src={restaurant}></img>
//                                     <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Restaurant</h6>
//                                 </Link>
//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
//                                 <Link to='/beauty' style={{ textDecoration: 'none', color: 'black' }}>
//                                     <img className="restaurant" src={beauty}></img>
//                                     <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Beauty</h6>
//                                 </Link>
//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
//                                 <Link to="/hotel_main" style={{ textDecoration: 'none', color: 'black' }}>
//                                     <img className="restaurant" src={hotel}></img>
//                                     <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Hotel</h6>
//                                 </Link>
//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
//                                 <img className="restaurant" src={contractor}></img>
//                                 <h6 style={{ marginLeft: "10px", fontFamily: " sans-serif" }}>Contarctor</h6>
//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
//                                 <Link to="/tutors"  style={{ textDecoration: 'none', color: 'black' }}>
//                                 <img className="restaurant" src={tutorlogo}></img>
//                                 <h6 style={{ marginLeft: "25px", fontFamily: " sans-serif" }}>Tutors</h6>
//                                 </Link>
//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2'>
//                                 <img className="restaurant" src={eventplanner}></img>
//                                 <h6 style={{ marginLeft: "5px", fontFamily: " sans-serif" }}>EventPlanner</h6>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div style={{ marginLeft: "150px" }}>
//                     <div className='container'>

//                         <div className='row ' style={{ width: "100%" }}>

//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  ' style={{ alignItems: "center" }}>
//                                 <img className="restaurant" src={Travels}></img>
//                                 <h6 style={{ marginLeft: "0px", fontFamily: " sans-serif" }}>Tour & Travels</h6>

//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
//                                 <Link to="/bank" style={{ textDecoration: 'none', color: 'black' }}>
//                                 <img className="restaurant" src={ca}></img>
//                                 <h6 style={{ marginLeft: "20px", fontFamily: " sans-serif" }}>Bank</h6>
//                                 </Link>
//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
//                                 <Link to='/hospital_main' style={{ textDecoration: 'none', color: 'black' }}>
//                                     <img className="restaurant" src={hospital}></img>
//                                     <h6 style={{ marginLeft: "15px", fontFamily: " sans-serif" }}>Hospitals</h6>
//                                 </Link>
//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
//                             <Link to='/atm' style={{ textDecoration: 'none', color: 'black' }}>
//                                 <img className="restaurant" src={atm_card}></img>
//                                 <h6 style={{ marginLeft: "30px", fontFamily: " sans-serif" }}>ATM</h6>
//                                 </Link>  
//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2  '>
//                                 <img className="restaurant" src={jewellery}></img>
//                                 <h6 style={{ marginLeft: "15px", fontFamily: " sans-serif" }}>Jewellery</h6>

//                             </div>
//                             <div className='mt-4 col-sm-6 col-md-6 col-lg-2'>
//                                 <img className="restaurant" src={service}></img>
//                                 <h6 style={{ marginLeft: "1px", fontFamily: " sans-serif" }}>ServiceCenter</h6>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>


//     )
// }



import './categories.component.css';
import restaurant from '../../assets/images/restaurant.jpg';
import tutorlogo from '../../assets/images/tutorlogo.jpg';
import hotel from '../../assets/images/hotel.jpg';
import eventplanner from '../../assets/images/eventplanner.jpg';
import Travels from '../../assets/images/Travels.jpg';
import beauty from '../../assets/images/beauty.jpg';
import contractor from '../../assets/images/contractor.jpg';
import ca from '../../assets/images/ca.jpg';
import atm_card from '../../assets/images/atm_card.jpg';
import hospital from '../../assets/images/hospital.jpg';
import jewellery from '../../assets/images/jewellery.jpg';
import service from '../../assets/images/service.jpg';
import { Link } from 'react-router-dom';

export function HomeCategories() {
    return (
        <div>
            <div>
                <h1 style={{ fontSize: "33px", textAlign: "center" }} className='mt-5'>Most Popular Categories</h1>
                <br />
                <div className="categories-container">
                    <div className='container'>
                        <div className='row'>

                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to="/restaurant-main" className="category-link">
                                    <img className="category-img" src={restaurant} alt="Restaurant" />
                                    <h6>Restaurant</h6>
                                </Link>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to='/beauty' className="category-link">
                                    <img className="category-img" src={beauty} alt="Beauty" />
                                    <h6>Beauty</h6>
                                </Link>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to="/hotel_main" className="category-link">
                                    <img className="category-img" src={hotel} alt="Hotel" />
                                    <h6>Hotel</h6>
                                </Link>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={contractor} alt="Contractor" />
                                <h6>Contractor</h6>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to="/tutors" className="category-link">
                                    <img className="category-img" src={tutorlogo} alt="Tutors" />
                                    <h6>Tutors</h6>
                                </Link>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={eventplanner} alt="Event Planner" />
                                <h6>Event Planner</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories-container">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={Travels} alt="Tour & Travels" />
                                <h6>Tour & Travels</h6>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to="/bank" className="category-link">
                                    <img className="category-img" src={ca} alt="Bank" />
                                    <h6>Bank</h6>
                                </Link>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to='/hospital_main' className="category-link">
                                    <img className="category-img" src={hospital} alt="Hospitals" />
                                    <h6>Hospitals</h6>
                                </Link>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <Link to='/atm' className="category-link">
                                    <img className="category-img" src={atm_card} alt="ATM" />
                                    <h6>ATM</h6>
                                </Link>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={jewellery} alt="Jewellery" />
                                <h6>Jewellery</h6>
                            </div>
                            <div className='col-4 col-sm-4 col-md-3 col-lg-2 mt-4 category-item'>
                                <img className="category-img" src={service} alt="Service Center" />
                                <h6>Service Center</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
